require File.expand_path("../config/environment", __FILE__)
require "dotenv/tasks"
require "runners"

desc "console"
task :console do
  Pry.start
end

desc "run"
task :run do
  require "date"

  date = Date.parse(ENV["date"] || (Date.today - 1).to_s)
  Runners.run("MostStarsByDay", date: date)
end

