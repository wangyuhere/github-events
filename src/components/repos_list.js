import React from "react"
import {ListGroup, ListGroupItem} from "react-bootstrap"
import Repository from "./repository"

export default class ReposList extends React.Component {

  render() {
    let repos = this.props.repos.map((repo) => {
      return (
        <ListGroupItem key={repo.id}>
          <Repository repo={repo} />
        </ListGroupItem>
      );
    });

    return (
      <ListGroup>
        {repos}
      </ListGroup>
    )
  }
}

