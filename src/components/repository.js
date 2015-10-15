import React from "react";

export default class Repository extends React.Component {
  render() {
    return (
      <div>
        <h3><a href={this.props.repo.html_url}>{this.props.repo.full_name}</a></h3>
        <p className="lead">
          {this.props.repo.description}
        </p>
        <p>
          <span className="glyphicon glyphicon-star"></span>
          <span> {this.props.repo.daily_watchers_count}</span>
          <span>/{this.props.repo.watchers_count}</span>
          <span className="pull-right">{this.props.repo.language}</span>
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

