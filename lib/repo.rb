class Repo
  attr_accessor :id, :name

  def self.from_json(json)
    Repo.new json["id"], json["name"]
  end

  def initialize(id, name)
    @id = id
    @name = name
  end

  def eql?(other)
    id == other.id
  end

  def hash
    id.hash
  end
end

