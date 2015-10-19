import React from "react"
import request from "superagent"
import moment from "moment"
import connectHistory from "../connect_history"
import DatePicker from "./date_picker"
import ReposFilter from "./repos_filter"
import ReposList from "./repos_list"

class MostStars extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      repos: [],
      filter: "new"
    };
    this.handleDateSelected = this.handleDateSelected.bind(this);
    this.handleFilterChanged = this.handleFilterChanged.bind(this);
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

      let repos = this.appendPercentage(res.body);
      this.setState({
        repos: repos
      });
    }.bind(this));
  }

  appendPercentage(repos) {
    return repos.map((repo) => {
      repo.percentage = repo.daily_watchers_count * 100.0 / repo.watchers_count;
      return repo;
    });
  }

  handleDateSelected(date) {
    let dateStr = moment(date).format("YYYY-MM-DD")
    this.props.history.pushState(null, `/most_stars/${dateStr}`);
  }

  handleFilterChanged(filter) {
    this.setState({
      filter: filter
    });
  }

  filterRepos() {
    let filter = this.state.filter;

    return this.state.repos.filter( (repo) => {
      if (filter == "new") {
        return repo.percentage >= 20;
      } else {
        return true;
      }
    });
  }

  render() {
    let minDate = new Date("2015-10-01");
    let maxDate = moment().subtract(1, "days").toDate();

    return (
      <div>
        <h2>Most starred repos by day</h2>
        <div className="pull-left">
          <DatePicker
            id="date-picker"
            minDate={minDate}
            maxDate={maxDate}
            date={this.curDate()}
            handleDateSelected={this.handleDateSelected} />
        </div>
        <div className="pull-right">
          <ReposFilter
            filter={this.state.filter}
            onFilterChange={this.handleFilterChanged} />
        </div>
        <div className="clearfix" />
        <p/>
        <ReposList repos={this.filterRepos()} />
      </div>
    )
  }
}

export default connectHistory(MostStars)

