import React from "react";
import ReactDOM from "react-dom";
import createBrowserHistory from "history/lib/createBrowserHistory"
import { Router, Route, IndexRoute } from "react-router";
import Navigation from "./components/navigation";
import MostStars from "./components/most_stars";

class App extends React.Component {
  render() {
    return (
      <div>
        <Navigation />
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
}

let history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={MostStars} />
      <Route path="most_stars(/:date)" component={MostStars} />
    </Route>
  </Router>,
  document.getElementById("content")
);

