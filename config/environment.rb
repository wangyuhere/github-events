require "rubygems"
require "bundler"
require "dotenv"

Dotenv.load
Bundler.require

ROOT = File.expand_path "..", File.dirname(__FILE__)

$: << File.join(ROOT, "lib")

module GithubEvents
  def self.root
    ROOT
  end

  def self.tmp
    File.join(ROOT, "tmp")
  end
end

