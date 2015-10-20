(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouter = require("react-router");

var _componentsNavigation = require("./components/navigation");

var _componentsNavigation2 = _interopRequireDefault(_componentsNavigation);

var _componentsMost_stars = require("./components/most_stars");

var _componentsMost_stars2 = _interopRequireDefault(_componentsMost_stars);

var App = (function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    _get(Object.getPrototypeOf(App.prototype), "constructor", this).apply(this, arguments);
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      return _react2["default"].createElement(
        "div",
        null,
        _react2["default"].createElement(_componentsNavigation2["default"], null),
        _react2["default"].createElement(
          "div",
          { className: "container" },
          this.props.children
        )
      );
    }
  }]);

  return App;
})(_react2["default"].Component);

_reactDom2["default"].render(_react2["default"].createElement(
  _reactRouter.Router,
  null,
  _react2["default"].createElement(
    _reactRouter.Route,
    { path: "/", component: App },
    _react2["default"].createElement(_reactRouter.IndexRoute, { component: _componentsMost_stars2["default"] }),
    _react2["default"].createElement(_reactRouter.Route, { path: "most_stars(/:date)", component: _componentsMost_stars2["default"] })
  )
), document.getElementById("content"));

},{"./components/most_stars":3,"./components/navigation":4,"react":"react","react-dom":"react-dom","react-router":"react-router"}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _pikaday = require("pikaday");

var _pikaday2 = _interopRequireDefault(_pikaday);

var DatePicker = (function (_React$Component) {
  _inherits(DatePicker, _React$Component);

  function DatePicker() {
    _classCallCheck(this, DatePicker);

    _get(Object.getPrototypeOf(DatePicker.prototype), "constructor", this).apply(this, arguments);
  }

  _createClass(DatePicker, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var props = this.props;

      new _pikaday2["default"]({
        field: document.getElementById(props.id),
        defaultDate: props.date,
        minDate: props.minDate,
        maxDate: props.maxDate,
        onSelect: props.handleDateSelected
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react2["default"].createElement(
        "form",
        { className: "form-inline" },
        _react2["default"].createElement(
          "div",
          { className: "form-group" },
          _react2["default"].createElement(
            "label",
            { htmlFor: this.props.id },
            "Choose Date"
          ),
          _react2["default"].createElement("input", { type: "text",
            id: this.props.id,
            value: this.props.date,
            className: "form-control" })
        )
      );
    }
  }]);

  return DatePicker;
})(_react2["default"].Component);

exports["default"] = DatePicker;
module.exports = exports["default"];

},{"pikaday":"pikaday","react":"react"}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _superagent = require("superagent");

var _superagent2 = _interopRequireDefault(_superagent);

var _moment = require("moment");

var _moment2 = _interopRequireDefault(_moment);

var _connect_history = require("../connect_history");

var _connect_history2 = _interopRequireDefault(_connect_history);

var _date_picker = require("./date_picker");

var _date_picker2 = _interopRequireDefault(_date_picker);

var _repos_filter = require("./repos_filter");

var _repos_filter2 = _interopRequireDefault(_repos_filter);

var _repos_list = require("./repos_list");

var _repos_list2 = _interopRequireDefault(_repos_list);

var MostStars = (function (_React$Component) {
  _inherits(MostStars, _React$Component);

  function MostStars(props) {
    _classCallCheck(this, MostStars);

    _get(Object.getPrototypeOf(MostStars.prototype), "constructor", this).call(this, props);

    this.state = {
      repos: [],
      filter: "new"
    };
    this.handleDateSelected = this.handleDateSelected.bind(this);
    this.handleFilterChanged = this.handleFilterChanged.bind(this);
  }

  _createClass(MostStars, [{
    key: "curDate",
    value: function curDate() {
      return this.props.params.date || "2015-10-12";
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.fetchData();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var oldDate = prevProps.params.date;
      var newDate = this.props.params.date;

      if (newDate !== oldDate) {
        this.fetchData();
      }
    }
  }, {
    key: "fetchData",
    value: function fetchData() {
      var _this = this;

      _superagent2["default"].get("data/most_stars/" + this.curDate() + ".json").end((function (err, res) {
        if (res.body == null) {
          return;
        }

        var repos = _this.appendPercentage(res.body);
        _this.setState({
          repos: repos
        });
      }).bind(this));
    }
  }, {
    key: "appendPercentage",
    value: function appendPercentage(repos) {
      return repos.map(function (repo) {
        repo.percentage = repo.daily_watchers_count * 100.0 / repo.watchers_count;
        return repo;
      });
    }
  }, {
    key: "handleDateSelected",
    value: function handleDateSelected(date) {
      var dateStr = (0, _moment2["default"])(date).format("YYYY-MM-DD");
      this.props.history.pushState(null, "/most_stars/" + dateStr);
    }
  }, {
    key: "handleFilterChanged",
    value: function handleFilterChanged(filter) {
      this.setState({
        filter: filter
      });
    }
  }, {
    key: "filterRepos",
    value: function filterRepos() {
      var filter = this.state.filter;

      return this.state.repos.filter(function (repo) {
        if (filter == "new") {
          return repo.percentage >= 20;
        } else {
          return true;
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var minDate = new Date("2015-10-01");
      var maxDate = (0, _moment2["default"])().subtract(1, "days").toDate();

      return _react2["default"].createElement(
        "div",
        null,
        _react2["default"].createElement(
          "h2",
          null,
          "Most starred repos by day"
        ),
        _react2["default"].createElement(
          "div",
          { className: "pull-left" },
          _react2["default"].createElement(_date_picker2["default"], {
            id: "date-picker",
            minDate: minDate,
            maxDate: maxDate,
            date: this.curDate(),
            handleDateSelected: this.handleDateSelected })
        ),
        _react2["default"].createElement(
          "div",
          { className: "pull-right" },
          _react2["default"].createElement(_repos_filter2["default"], {
            filter: this.state.filter,
            onFilterChange: this.handleFilterChanged })
        ),
        _react2["default"].createElement("div", { className: "clearfix" }),
        _react2["default"].createElement("p", null),
        _react2["default"].createElement(_repos_list2["default"], { repos: this.filterRepos() })
      );
    }
  }]);

  return MostStars;
})(_react2["default"].Component);

exports["default"] = (0, _connect_history2["default"])(MostStars);
module.exports = exports["default"];

},{"../connect_history":8,"./date_picker":2,"./repos_filter":5,"./repos_list":6,"moment":"moment","react":"react","superagent":"superagent"}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require("react-bootstrap");

var Navigation = (function (_React$Component) {
  _inherits(Navigation, _React$Component);

  function Navigation() {
    _classCallCheck(this, Navigation);

    _get(Object.getPrototypeOf(Navigation.prototype), "constructor", this).apply(this, arguments);
  }

  _createClass(Navigation, [{
    key: "render",
    value: function render() {
      return _react2["default"].createElement(
        _reactBootstrap.Navbar,
        { toggleNavKey: 0 },
        _react2["default"].createElement(
          _reactBootstrap.NavBrand,
          null,
          "Github Events"
        )
      );
    }
  }]);

  return Navigation;
})(_react2["default"].Component);

exports["default"] = Navigation;
module.exports = exports["default"];

},{"react":"react","react-bootstrap":"react-bootstrap"}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require("react-bootstrap");

var ReposFilter = (function (_React$Component) {
  _inherits(ReposFilter, _React$Component);

  function ReposFilter(props) {
    _classCallCheck(this, ReposFilter);

    _get(Object.getPrototypeOf(ReposFilter.prototype), "constructor", this).call(this, props);

    this.handleNew = this.handleNew.bind(this);
    this.handleAll = this.handleAll.bind(this);
  }

  _createClass(ReposFilter, [{
    key: "handleNew",
    value: function handleNew() {
      if (this.props.filter != "new") {
        this.props.onFilterChange("new");
      }
    }
  }, {
    key: "handleAll",
    value: function handleAll() {
      if (this.props.filter != "all") {
        this.props.onFilterChange("all");
      }
    }
  }, {
    key: "render",
    value: function render() {
      var newActive = this.props.filter === "new";
      var allActive = this.props.filter === "all";

      return _react2["default"].createElement(
        _reactBootstrap.ButtonToolbar,
        null,
        _react2["default"].createElement(
          _reactBootstrap.Button,
          { active: newActive, onClick: this.handleNew },
          "New"
        ),
        _react2["default"].createElement(
          _reactBootstrap.Button,
          { active: allActive, onClick: this.handleAll },
          "All"
        )
      );
    }
  }]);

  return ReposFilter;
})(_react2["default"].Component);

exports["default"] = ReposFilter;

ReposFilter.propTypes = {
  filter: _react2["default"].PropTypes.string,
  onFilterChange: _react2["default"].PropTypes.func.isRequired
};

ReposFilter.defaultProps = {
  filter: "new"
};
module.exports = exports["default"];

},{"react":"react","react-bootstrap":"react-bootstrap"}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require("react-bootstrap");

var _repository = require("./repository");

var _repository2 = _interopRequireDefault(_repository);

var ReposList = (function (_React$Component) {
  _inherits(ReposList, _React$Component);

  function ReposList() {
    _classCallCheck(this, ReposList);

    _get(Object.getPrototypeOf(ReposList.prototype), "constructor", this).apply(this, arguments);
  }

  _createClass(ReposList, [{
    key: "render",
    value: function render() {
      var repos = this.props.repos.map(function (repo) {
        return _react2["default"].createElement(
          _reactBootstrap.ListGroupItem,
          { key: repo.id },
          _react2["default"].createElement(_repository2["default"], { repo: repo })
        );
      });

      return _react2["default"].createElement(
        _reactBootstrap.ListGroup,
        null,
        repos
      );
    }
  }]);

  return ReposList;
})(_react2["default"].Component);

exports["default"] = ReposList;
module.exports = exports["default"];

},{"./repository":7,"react":"react","react-bootstrap":"react-bootstrap"}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var Repository = (function (_React$Component) {
  _inherits(Repository, _React$Component);

  function Repository() {
    _classCallCheck(this, Repository);

    _get(Object.getPrototypeOf(Repository.prototype), "constructor", this).apply(this, arguments);
  }

  _createClass(Repository, [{
    key: "render",
    value: function render() {
      var repo = this.props.repo;

      return _react2["default"].createElement(
        "div",
        null,
        _react2["default"].createElement(
          "h3",
          null,
          _react2["default"].createElement(
            "a",
            { href: repo.html_url },
            repo.full_name
          )
        ),
        _react2["default"].createElement(
          "p",
          { className: "lead" },
          repo.description
        ),
        _react2["default"].createElement(
          "p",
          null,
          _react2["default"].createElement("span", { className: "glyphicon glyphicon-star" }),
          _react2["default"].createElement(
            "span",
            null,
            " ",
            repo.daily_watchers_count
          ),
          _react2["default"].createElement(
            "span",
            null,
            "/",
            repo.watchers_count
          ),
          _react2["default"].createElement(
            "span",
            null,
            " (",
            repo.percentage.toFixed(2),
            "%)"
          ),
          _react2["default"].createElement(
            "span",
            { className: "pull-right" },
            repo.language
          )
        )
      );
    }
  }]);

  return Repository;
})(_react2["default"].Component);

exports["default"] = Repository;

Repository.propTypes = {
  repo: _react2["default"].PropTypes.object
};

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
module.exports = exports["default"];

},{"react":"react"}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports["default"] = connectHistory;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require("react-router");

function connectHistory(Component) {
  return _react2["default"].createClass({
    mixins: [_reactRouter.History],
    render: function render() {
      return _react2["default"].createElement(Component, _extends({}, this.props, { history: this.history }));
    }
  });
}

module.exports = exports["default"];

},{"react":"react","react-router":"react-router"}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvcm9vdC9jb2RlL2dpdGh1Yi1ldmVudHMvc3JjL2FwcC5qcyIsIi9yb290L2NvZGUvZ2l0aHViLWV2ZW50cy9zcmMvY29tcG9uZW50cy9kYXRlX3BpY2tlci5qcyIsIi9yb290L2NvZGUvZ2l0aHViLWV2ZW50cy9zcmMvY29tcG9uZW50cy9tb3N0X3N0YXJzLmpzIiwiL3Jvb3QvY29kZS9naXRodWItZXZlbnRzL3NyYy9jb21wb25lbnRzL25hdmlnYXRpb24uanMiLCIvcm9vdC9jb2RlL2dpdGh1Yi1ldmVudHMvc3JjL2NvbXBvbmVudHMvcmVwb3NfZmlsdGVyLmpzIiwiL3Jvb3QvY29kZS9naXRodWItZXZlbnRzL3NyYy9jb21wb25lbnRzL3JlcG9zX2xpc3QuanMiLCIvcm9vdC9jb2RlL2dpdGh1Yi1ldmVudHMvc3JjL2NvbXBvbmVudHMvcmVwb3NpdG9yeS5qcyIsIi9yb290L2NvZGUvZ2l0aHViLWV2ZW50cy9zcmMvY29ubmVjdF9oaXN0b3J5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7O3FCQ0FrQixPQUFPOzs7O3dCQUNKLFdBQVc7Ozs7MkJBQ1UsY0FBYzs7b0NBQ2pDLHlCQUF5Qjs7OztvQ0FDMUIseUJBQXlCOzs7O0lBRXpDLEdBQUc7WUFBSCxHQUFHOztXQUFILEdBQUc7MEJBQUgsR0FBRzs7K0JBQUgsR0FBRzs7O2VBQUgsR0FBRzs7V0FDRCxrQkFBRztBQUNQLGFBQ0U7OztRQUNFLHlFQUFjO1FBQ2Q7O1lBQUssU0FBUyxFQUFDLFdBQVc7VUFDdkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRO1NBQ2hCO09BQ0YsQ0FDTjtLQUNIOzs7U0FWRyxHQUFHO0dBQVMsbUJBQU0sU0FBUzs7QUFhakMsc0JBQVMsTUFBTSxDQUNiOzs7RUFDRTs7TUFBTyxJQUFJLEVBQUMsR0FBRyxFQUFDLFNBQVMs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Q0YsQ0FBQyxDQUFBO0NBQ0giLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIjtcbmltcG9ydCB7IFJvdXRlciwgUm91dGUsIEluZGV4Um91dGUgfSBmcm9tIFwicmVhY3Qtcm91dGVyXCI7XG5pbXBvcnQgTmF2aWdhdGlvbiBmcm9tIFwiLi9jb21wb25lbnRzL25hdmlnYXRpb25cIjtcbmltcG9ydCBNb3N0U3RhcnMgZnJvbSBcIi4vY29tcG9uZW50cy9tb3N0X3N0YXJzXCI7XG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPE5hdmlnYXRpb24gLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cblJlYWN0RE9NLnJlbmRlcihcbiAgPFJvdXRlcj5cbiAgICA8Um91dGUgcGF0aD1cIi9cIiBjb21wb25lbnQ9e0FwcH0+XG4gICAgICA8SW5kZXhSb3V0ZSBjb21wb25lbnQ9e01vc3RTdGFyc30gLz5cbiAgICAgIDxSb3V0ZSBwYXRoPVwibW9zdF9zdGFycygvOmRhdGUpXCIgY29tcG9uZW50PXtNb3N0U3RhcnN9IC8+XG4gICAgPC9Sb3V0ZT5cbiAgPC9Sb3V0ZXI+LFxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIilcbik7XG5cbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQaWthZGF5IGZyb20gXCJwaWthZGF5XCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGF0ZVBpY2tlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgbGV0IHByb3BzID0gdGhpcy5wcm9wcztcblxuICAgIG5ldyBQaWthZGF5KHtcbiAgICAgIGZpZWxkOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwcm9wcy5pZCksXG4gICAgICBkZWZhdWx0RGF0ZTogcHJvcHMuZGF0ZSxcbiAgICAgIG1pbkRhdGU6IHByb3BzLm1pbkRhdGUsXG4gICAgICBtYXhEYXRlOiBwcm9wcy5tYXhEYXRlLFxuICAgICAgb25TZWxlY3Q6IHByb3BzLmhhbmRsZURhdGVTZWxlY3RlZFxuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8Zm9ybSBjbGFzc05hbWU9XCJmb3JtLWlubGluZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj17dGhpcy5wcm9wcy5pZH0+Q2hvb3NlIERhdGU8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBpZD17dGhpcy5wcm9wcy5pZH1cbiAgICAgICAgICAgIHZhbHVlPXt0aGlzLnByb3BzLmRhdGV9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZm9ybT5cbiAgICApXG4gIH1cbn1cblxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgcmVxdWVzdCBmcm9tIFwic3VwZXJhZ2VudFwiXG5pbXBvcnQgbW9tZW50IGZyb20gXCJtb21lbnRcIlxuaW1wb3J0IGNvbm5lY3RIaXN0b3J5IGZyb20gXCIuLi9jb25uZWN0X2hpc3RvcnlcIlxuaW1wb3J0IERhdGVQaWNrZXIgZnJvbSBcIi4vZGF0ZV9waWNrZXJcIlxuaW1wb3J0IFJlcG9zRmlsdGVyIGZyb20gXCIuL3JlcG9zX2ZpbHRlclwiXG5pbXBvcnQgUmVwb3NMaXN0IGZyb20gXCIuL3JlcG9zX2xpc3RcIlxuXG5jbGFzcyBNb3N0U3RhcnMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHJlcG9zOiBbXSxcbiAgICAgIGZpbHRlcjogXCJuZXdcIlxuICAgIH07XG4gICAgdGhpcy5oYW5kbGVEYXRlU2VsZWN0ZWQgPSB0aGlzLmhhbmRsZURhdGVTZWxlY3RlZC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlRmlsdGVyQ2hhbmdlZCA9IHRoaXMuaGFuZGxlRmlsdGVyQ2hhbmdlZC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgY3VyRGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5wYXJhbXMuZGF0ZSB8fCBcIjIwMTUtMTAtMTJcIlxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5mZXRjaERhdGEoKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZSAocHJldlByb3BzKSB7XG4gICAgbGV0IG9sZERhdGUgPSBwcmV2UHJvcHMucGFyYW1zLmRhdGU7XG4gICAgbGV0IG5ld0RhdGUgPSB0aGlzLnByb3BzLnBhcmFtcy5kYXRlO1xuXG4gICAgaWYgKG5ld0RhdGUgIT09IG9sZERhdGUpIHtcbiAgICAgIHRoaXMuZmV0Y2hEYXRhKCk7XG4gICAgfVxuICB9XG5cbiAgZmV0Y2hEYXRhKCkge1xuICAgIHJlcXVlc3RcbiAgICAuZ2V0KGBkYXRhL21vc3Rfc3RhcnMvJHt0aGlzLmN1ckRhdGUoKX0uanNvbmApXG4gICAgLmVuZCgoZXJyLCByZXMpID0+IHtcbiAgICAgIGlmIChyZXMuYm9keSA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgbGV0IHJlcG9zID0gdGhpcy5hcHBlbmRQZXJjZW50YWdlKHJlcy5ib2R5KTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICByZXBvczogcmVwb3NcbiAgICAgIH0pO1xuICAgIH0uYmluZCh0aGlzKSk7XG4gIH1cblxuICBhcHBlbmRQZXJjZW50YWdlKHJlcG9zKSB7XG4gICAgcmV0dXJuIHJlcG9zLm1hcCgocmVwbykgPT4ge1xuICAgICAgcmVwby5wZXJjZW50YWdlID0gcmVwby5kYWlseV93YXRjaGVyc19jb3VudCAqIDEwMC4wIC8gcmVwby53YXRjaGVyc19jb3VudDtcbiAgICAgIHJldHVybiByZXBvO1xuICAgIH0pO1xuICB9XG5cbiAgaGFuZGxlRGF0ZVNlbGVjdGVkKGRhdGUpIHtcbiAgICBsZXQgZGF0ZVN0ciA9IG1vbWVudChkYXRlKS5mb3JtYXQoXCJZWVlZLU1NLUREXCIpXG4gICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2hTdGF0ZShudWxsLCBgL21vc3Rfc3RhcnMvJHtkYXRlU3RyfWApO1xuICB9XG5cbiAgaGFuZGxlRmlsdGVyQ2hhbmdlZChmaWx0ZXIpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGZpbHRlcjogZmlsdGVyXG4gICAgfSk7XG4gIH1cblxuICBmaWx0ZXJSZXBvcygpIHtcbiAgICBsZXQgZmlsdGVyID0gdGhpcy5zdGF0ZS5maWx0ZXI7XG5cbiAgICByZXR1cm4gdGhpcy5zdGF0ZS5yZXBvcy5maWx0ZXIoIChyZXBvKSA9PiB7XG4gICAgICBpZiAoZmlsdGVyID09IFwibmV3XCIpIHtcbiAgICAgICAgcmV0dXJuIHJlcG8ucGVyY2VudGFnZSA+PSAyMDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCBtaW5EYXRlID0gbmV3IERhdGUoXCIyMDE1LTEwLTAxXCIpO1xuICAgIGxldCBtYXhEYXRlID0gbW9tZW50KCkuc3VidHJhY3QoMSwgXCJkYXlzXCIpLnRvRGF0ZSgpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMj5Nb3N0IHN0YXJyZWQgcmVwb3MgYnkgZGF5PC9oMj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdWxsLWxlZnRcIj5cbiAgICAgICAgICA8RGF0ZVBpY2tlclxuICAgICAgICAgICAgaWQ9XCJkYXRlLXBpY2tlclwiXG4gICAgICAgICAgICBtaW5EYXRlPXttaW5EYXRlfVxuICAgICAgICAgICAgbWF4RGF0ZT17bWF4RGF0ZX1cbiAgICAgICAgICAgIGRhdGU9e3RoaXMuY3VyRGF0ZSgpfVxuICAgICAgICAgICAgaGFuZGxlRGF0ZVNlbGVjdGVkPXt0aGlzLmhhbmRsZURhdGVTZWxlY3RlZH0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVsbC1yaWdodFwiPlxuICAgICAgICAgIDxSZXBvc0ZpbHRlclxuICAgICAgICAgICAgZmlsdGVyPXt0aGlzLnN0YXRlLmZpbHRlcn1cbiAgICAgICAgICAgIG9uRmlsdGVyQ2hhbmdlPXt0aGlzLmhhbmRsZUZpbHRlckNoYW5nZWR9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsZWFyZml4XCIgLz5cbiAgICAgICAgPHAvPlxuICAgICAgICA8UmVwb3NMaXN0IHJlcG9zPXt0aGlzLmZpbHRlclJlcG9zKCl9IC8+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdEhpc3RvcnkoTW9zdFN0YXJzKVxuXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge05hdmJhciwgTmF2QnJhbmR9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmF2aWdhdGlvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPE5hdmJhciB0b2dnbGVOYXZLZXk9ezB9PlxuICAgICAgICA8TmF2QnJhbmQ+R2l0aHViIEV2ZW50czwvTmF2QnJhbmQ+XG4gICAgICA8L05hdmJhcj5cbiAgICApXG4gIH07XG59XG5cbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHtCdXR0b25Ub29sYmFyLCBCdXR0b259IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXBvc0ZpbHRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLmhhbmRsZU5ldyA9IHRoaXMuaGFuZGxlTmV3LmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVBbGwgPSB0aGlzLmhhbmRsZUFsbC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgaGFuZGxlTmV3KCkge1xuICAgIGlmICh0aGlzLnByb3BzLmZpbHRlciAhPSBcIm5ld1wiKSB7XG4gICAgICB0aGlzLnByb3BzLm9uRmlsdGVyQ2hhbmdlKFwibmV3XCIpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUFsbCgpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5maWx0ZXIgIT0gXCJhbGxcIikge1xuICAgICAgdGhpcy5wcm9wcy5vbkZpbHRlckNoYW5nZShcImFsbFwiKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IG5ld0FjdGl2ZSA9IHRoaXMucHJvcHMuZmlsdGVyID09PSBcIm5ld1wiO1xuICAgIGxldCBhbGxBY3RpdmUgPSB0aGlzLnByb3BzLmZpbHRlciA9PT0gXCJhbGxcIjtcblxuICAgIHJldHVybiAoXG4gICAgICA8QnV0dG9uVG9vbGJhcj5cbiAgICAgICAgPEJ1dHRvbiBhY3RpdmU9e25ld0FjdGl2ZX0gb25DbGljaz17dGhpcy5oYW5kbGVOZXd9Pk5ldzwvQnV0dG9uPlxuICAgICAgICA8QnV0dG9uIGFjdGl2ZT17YWxsQWN0aXZlfSBvbkNsaWNrPXt0aGlzLmhhbmRsZUFsbH0+QWxsPC9CdXR0b24+XG4gICAgICA8L0J1dHRvblRvb2xiYXI+XG4gICAgKTtcbiAgfVxufVxuXG5SZXBvc0ZpbHRlci5wcm9wVHlwZXMgPSB7XG4gIGZpbHRlcjogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgb25GaWx0ZXJDaGFuZ2U6IFJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbn1cblxuUmVwb3NGaWx0ZXIuZGVmYXVsdFByb3BzID0ge1xuICBmaWx0ZXI6IFwibmV3XCJcbn1cblxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQge0xpc3RHcm91cCwgTGlzdEdyb3VwSXRlbX0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiXG5pbXBvcnQgUmVwb3NpdG9yeSBmcm9tIFwiLi9yZXBvc2l0b3J5XCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVwb3NMaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHJlcG9zID0gdGhpcy5wcm9wcy5yZXBvcy5tYXAoKHJlcG8pID0+IHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxMaXN0R3JvdXBJdGVtIGtleT17cmVwby5pZH0+XG4gICAgICAgICAgPFJlcG9zaXRvcnkgcmVwbz17cmVwb30gLz5cbiAgICAgICAgPC9MaXN0R3JvdXBJdGVtPlxuICAgICAgKTtcbiAgICB9KTtcblxuICAgIHJldHVybiAoXG4gICAgICA8TGlzdEdyb3VwPlxuICAgICAgICB7cmVwb3N9XG4gICAgICA8L0xpc3RHcm91cD5cbiAgICApXG4gIH1cbn1cblxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXBvc2l0b3J5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGxldCByZXBvID0gdGhpcy5wcm9wcy5yZXBvO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMz48YSBocmVmPXtyZXBvLmh0bWxfdXJsfT57cmVwby5mdWxsX25hbWV9PC9hPjwvaDM+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImxlYWRcIj5cbiAgICAgICAgICB7cmVwby5kZXNjcmlwdGlvbn1cbiAgICAgICAgPC9wPlxuICAgICAgICA8cD5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJnbHlwaGljb24gZ2x5cGhpY29uLXN0YXJcIj48L3NwYW4+XG4gICAgICAgICAgPHNwYW4+IHtyZXBvLmRhaWx5X3dhdGNoZXJzX2NvdW50fTwvc3Bhbj5cbiAgICAgICAgICA8c3Bhbj4ve3JlcG8ud2F0Y2hlcnNfY291bnR9PC9zcGFuPlxuICAgICAgICAgIDxzcGFuPiAoe3JlcG8ucGVyY2VudGFnZS50b0ZpeGVkKDIpfSUpPC9zcGFuPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInB1bGwtcmlnaHRcIj57cmVwby5sYW5ndWFnZX08L3NwYW4+XG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfTtcbn1cblxuUmVwb3NpdG9yeS5wcm9wVHlwZXMgPSB7XG4gIHJlcG86IFJlYWN0LlByb3BUeXBlcy5vYmplY3Rcbn1cblxuUmVwb3NpdG9yeS5kZWZhdWx0UHJvcHMgPSB7XG4gIHJlcG86IHtcbiAgICBpZDogMSxcbiAgICBmdWxsX25hbWU6IFwiZmFjZWJvb2svcmVhY3RcIixcbiAgICBodG1sX3VybDogXCJodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3RcIixcbiAgICBkZXNjcmlwdGlvbjogXCJBIGRlY2xhcmF0aXZlLCBlZmZpY2llbnQsIGFuZCBmbGV4aWJsZSBKYXZhU2NyaXB0IGxpYnJhcnkgZm9yIGJ1aWxkaW5nIHVzZXIgaW50ZXJmYWNlcy5cIixcbiAgICBjcmVhdGVkX2F0OiBcIjIwMTMtMDEtMDEgMDk6MDA6MDAgVVRDXCIsXG4gICAgbGFuZ3VhZ2U6IFwiSmF2YVNjcmlwdFwiLFxuICAgIHdhdGNoZXJzX2NvdW50OiBcIjEyM1wiLFxuICAgIG5ldHdvcmtfY291bnQ6IFwiMjNcIixcbiAgICBkYWlseV93YXRjaGVyc19jb3VudDogXCI0NVwiXG4gIH1cbn07XG5cbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgSGlzdG9yeSB9IGZyb20gXCJyZWFjdC1yb3V0ZXJcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb25uZWN0SGlzdG9yeShDb21wb25lbnQpIHtcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICBtaXhpbnM6IFsgSGlzdG9yeSBdLFxuICAgIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiA8Q29tcG9uZW50IHsuLi50aGlzLnByb3BzfSBoaXN0b3J5PXt0aGlzLmhpc3Rvcnl9IC8+XG4gICAgfVxuICB9KVxufVxuXG4iXX0=
