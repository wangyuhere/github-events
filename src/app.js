import React from "react";
import ReactDOM from "react-dom";
import Navigation from "./components/navigation"
import MostStars from "./components/most_stars"

class App extends React.Component {
  render() {
    return (
      <div>
        <Navigation />
        <div className="container">
          <MostStars />
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById("content")
);
