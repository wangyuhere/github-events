import React from "react"
import request from "superagent"
import moment from "moment"
import connectHistory from "../connect_history"
import DatePicker from "./date_picker"
import ReposList from "./repos_list"

class MostStars extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      repos: []
    };
    this.handleDateSelected = this.handleDateSelected.bind(this);
  }

  curDate() {
    return this.props.params.date || "2015-10-12"
  }

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate (prevProps) {
    let oldDate = prevProps.params.date;
    let newDate = this.props.params.date;

    if (newDate !== oldDate) {
      this.fetchData();
    }
  }

  fetchData() {
    request
    .get(`data/most_stars/${this.curDate()}.json`)
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
    let dateStr = moment(date).format("YYYY-MM-DD")
    this.props.history.pushState(null, `/most_stars/${dateStr}`);
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
          date={this.curDate()}
          handleDateSelected={this.handleDateSelected}/>
        <div className="clearfix" />
        <p/>
        <ReposList repos={this.state.repos} />
      </div>
    )
  }
}

export default connectHistory(MostStars)

