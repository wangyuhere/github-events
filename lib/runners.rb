module Runners
  def self.run(name, args)
    const_get(name).new(args).run
  end

  require "runners/most_stars_by_day"
end

