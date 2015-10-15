require "repo"

class Event
  attr_accessor :type, :repo

  def self.from_json(json)
    Event.new.tap do |e|
      e.type = json["type"]
      e.repo = Repo.from_json(json["repo"])
    end
  end
end
