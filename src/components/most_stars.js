import React from "react";
import request from "superagent"
import {ListGroup, ListGroupItem} from "react-bootstrap";
import moment from "moment"
import Pikaday from "pikaday"
import Repository from "./repository"

export default class MostStars extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      repos: [],
      date: "2015-10-12"
    };
    this.handleDateSelected = this.handleDateSelected.bind(this);
  }

  componentDidMount() {
    this.fetchData();
    let _this = this;

    new Pikaday({
      field: document.getElementById("date-picker"),
      defaultDate: _this.state.date,
      minDate: new Date("2015-10-10"),
      maxDate: moment().subtract(1, "days").toDate(),
      onSelect: _this.handleDateSelected
    });
  }

  fetchData() {
    request
    .get(`/data/most_stars/${this.state.date}.json`)
    .end((err, res) => {
      if (res.body == null) {
        return;
      }

      this.setState({
        repos: res.body
      });
    }.bind(this));
  }

  handleDateSelected(date) {
    this.setState({ date: moment(date).format("YYYY-MM-DD") });
    this.fetchData();
  }

  render() {
    let repos = this.state.repos.map((repo) => {
      return (
        <ListGroupItem key={repo.id}>
          <Repository repo={repo} />
        </ListGroupItem>
      );
    });

    return (
      <div>
        <h2>Most starred repos by day</h2>
        <form className="form-inline pull-right">
          <div className="form-group">
            <label for="date-picker">Choose Date</label>
            <input type="text"
              id="date-picker"
              value={this.state.date}
              className="form-control" />
          </div>
        </form>
        <div className="clearfix" />
        <p/>
        <ListGroup>
          {repos}
        </ListGroup>
      </div>
    )
  };
}

