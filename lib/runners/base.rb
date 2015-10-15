require "logger"
require "parser"

module Runners
  class Base
    def run
      raise "Implement me"
    end

    def full_path(path)
      File.join GithubEvents.root, path
    end

    def logger
      @logger ||= Logger.new(STDOUT)
    end
  end
end

