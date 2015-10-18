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

desc "update"
task :update do
  system("git pull --rebase")
end

desc "deploy"
task :deploy do
  system("rm -rf ./dist")
  system("git clone -b gh-pages git@github.com:wangyuhere/github-events.git dist")
  system("gulp build")
  system("cd dist && git add . && git commit -m 'updated' && git push")
end

