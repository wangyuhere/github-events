import React from "react"
import {ButtonToolbar, Button} from "react-bootstrap"

export default class ReposFilter extends React.Component {

  constructor(props) {
    super(props);

    this.handleNew = this.handleNew.bind(this);
    this.handleAll = this.handleAll.bind(this);
  }

  handleNew() {
    if (this.props.filter != "new") {
      this.props.onFilterChange("new");
    }
  }

  handleAll() {
    if (this.props.filter != "all") {
      this.props.onFilterChange("all");
    }
  }

  render() {
    let newActive = this.props.filter === "new";
    let allActive = this.props.filter === "all";

    return (
      <ButtonToolbar>
        <Button active={newActive} onClick={this.handleNew}>New</Button>
        <Button active={allActive} onClick={this.handleAll}>All</Button>
      </ButtonToolbar>
    );
  }
}

ReposFilter.propTypes = {
  filter: React.PropTypes.string,
  onFilterChange: React.PropTypes.func.isRequired
}

ReposFilter.defaultProps = {
  filter: "new"
}

