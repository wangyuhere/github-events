require "json"
require "fileutils"
require_relative "./base"

module Runners
  class MostStarsByDay < Base
    MIN_STARS = 20

    attr_reader :date, :event_type

    def initialize(date:)
      @date = date
      @event_type = "WatchEvent"
    end

    def run
      create_dirs
      download unless File.exists?(file)
      generate_json
    end

    def create_dirs
      [file, json_file].each do |f|
        dirname = File.dirname(f)
        FileUtils.mkdir_p(dirname) unless File.directory?(dirname)
      end
    end

    def download
      repos = Hash.new(0)
      ::Parser.new(date: date, event_type: event_type).parse do |event|
        repos[event.repo] += 1
      end

      File.open(file, "w") do |f|
        repos.sort_by(&:last).reverse.each do |repo, count|
          f.puts "#{repo.id} #{repo.name} #{count}"
        end
      end
    end

    def generate_json
      jsons = []
      File.open(file, "r") do |f|
        f.each_line do |line|
          _, name, count = line.split(/\s+/)
          break if count.to_i < MIN_STARS
          begin
            repo = Octokit.repo name
            jsons << {
              id: repo.id,
              full_name: repo.full_name,
              html_url: repo.html_url,
              description: repo.description,
              created_at: repo.created_at,
              language: repo.language,
              watchers_count: repo.watchers_count,
              network_count: repo.network_count,
              daily_watchers_count: count.to_i,
            }.to_json
          rescue => e
            logger.error "Error in fetch #{name}: #{e}"
          end
        end
      end
      write_json jsons
    end

    def write_json(jsons)
      File.open(json_file, "w") do |f|
        f.puts "["
        jsons[0...-1].each { |json| f.puts "#{json}," }
        f.puts jsons.last
        f.puts "]"
      end
    end

    def file
      full_path("tmp/#{event_type}-#{date}.txt")
    end

    def json_file
      full_path("public/data/most_stars/#{date}.json")
    end

  end
end

