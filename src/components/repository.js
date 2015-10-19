import React from "react";

export default class Repository extends React.Component {
  render() {
    let repo = this.props.repo;

    return (
      <div>
        <h3><a href={repo.html_url}>{repo.full_name}</a></h3>
        <p className="lead">
          {repo.description}
        </p>
        <p>
          <span className="glyphicon glyphicon-star"></span>
          <span> {repo.daily_watchers_count}</span>
          <span>/{repo.watchers_count}</span>
          <span> ({repo.percentage.toFixed(2)}%)</span>
          <span className="pull-right">{repo.language}</span>
        </p>
      </div>
    )
  };
}

Repository.propTypes = {
  repo: React.PropTypes.object
}

Repository.defaultProps = {
  repo: {
    id: 1,
    full_name: "facebook/react",
    html_url: "https://github.com/facebook/react",
    description: "A declarative, efficient, and flexible JavaScript library for building user interfaces.",
    created_at: "2013-01-01 09:00:00 UTC",
    language: "JavaScript",
    watchers_count: "123",
    network_count: "23",
    daily_watchers_count: "45"
  }
};

