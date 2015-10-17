every 1.day, at: "3am" do
  rake "run"
end

every 1.day, at: "4am" do
  rake "deploy"
end

