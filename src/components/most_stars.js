import React from "react"
import request from "superagent"
import {ListGroup, ListGroupItem} from "react-bootstrap"
import moment from "moment"
import DatePicker from "./date_picker"
import ReposList from "./repos_list"

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
  }

  fetchData() {
    request
    .get(`data/most_stars/${this.state.date}.json`)
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
    let minDate = new Date("2015-10-01");
    let maxDate = moment().subtract(1, "days").toDate();

    return (
      <div>
        <h2>Most starred repos by day</h2>
        <DatePicker
          id="date-picker"
          minDate={minDate}
          maxDate={maxDate}
          date={this.state.date}
          handleDateSelected={this.handleDateSelected}/>
        <div className="clearfix" />
        <p/>
        <ReposList repos={this.state.repos} />
      </div>
    )
  }
}

