# github-events

## Introduction
Play with Github public events data.

Also try React.js with ES6 + gulp.

[http://wangyuhere.github.io/github-events/](http://wangyuhere.github.io/github-events/)

Data is fetched from [Github Archive](https://www.githubarchive.org/)

Current implemented:

- Most starred repositories by day (not all days are imported yet)

## Setup

```shell
git clone https://github.com/wangyuhere/github-events.git
cd github-events

# Generate your Github API access token and put in `.env`
echo "OCTOKIT_ACCESS_TOKEN=YOUR_TOKEN" > .env

npm install
bundle install

# generate data by specified day
rake run date="2015-10-15"

# generate yesterday's data
rake run

# run the site
gulp serve
```
