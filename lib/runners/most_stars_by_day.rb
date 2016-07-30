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
      FileUtils.rm_f tmp_file
      (0..23).each do |hour|
        url = "http://data.githubarchive.org/#{date}-#{hour}.json.gz"
        system("curl -s #{url} | zgrep 'WatchEvent' | jq -r -c '. | .repo.name' >> #{tmp_file}") or raise "can not download #{url}"
      end
      system("sort -n #{tmp_file} | uniq -c | awk '{if($1>#{MIN_STARS/2})print $1, $2}' | sort -n -r > #{file}") or raise "can not sort and uniq the events"
    end

    def generate_json
      jsons = []
      File.open(file, "r") do |f|
        f.each_line do |line|
          count, name = line.split(/\s+/)
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

    def tmp_file
      full_path("tmp/daily_watch_events.txt")
    end

    def json_file
      full_path("public/data/most_stars/#{date}.json")
    end

  end
end

