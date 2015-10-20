every 1.day, at: "1am" do
  rake "update", output: "./log/update.log"
end

every 1.day, at: "2am" do
  rake "run", output: "./log/run.log"
end

every 1.day, at: "3am" do
  rake "deploy", output: "./log/deploy.log"
end

