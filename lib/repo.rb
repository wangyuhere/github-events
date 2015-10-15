class Repo
  attr_accessor :id, :name, :url

  def self.from_json(json)
    Repo.new.tap do |r|
      r.id = json["id"]
      r.name = json["name"]
      r.url = json["url"]
    end
  end

  def eql?(other)
    id == other.id
  end

  def hash
    id.hash
  end
end

