every 1.day, at: "1am" do
  rake "update"
end

every 1.day, at: "2am" do
  rake "run"
end

every 1.day, at: "3am" do
  rake "deploy"
end

