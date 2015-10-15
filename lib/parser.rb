require "logger"
require "open-uri"
require "zlib"
require "yajl"
require "event"

class Parser
  attr_reader :date, :event_type

  def initialize(date: nil, event_type: nil)
    @date = date || (Date.today-1)
    @event_type = event_type || "WatchEvent"
  end

  def parse
    (0..23).each do |hour|
      start = Time.now
      gz = Zlib::GzipReader.new open(url(hour))
      Yajl::Parser.parse(gz.read) do |event|
        next unless event["type"] == event_type
        yield Event.from_json(event)
      end
      gz.close

      logger.info "Parse #{date}-#{hour} took #{Time.now - start} secs."
    end
  end

  def url(hour = 0)
    "http://data.githubarchive.org/#{date}-#{hour}.json.gz"
  end

  def logger
    @logger ||= Logger.new(STDOUT)
  end
end

