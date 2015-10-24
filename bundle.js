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
      return this.props.params.date || (0, _moment2["default"])().subtract(2, "days").format("YYYY-MM-DD");
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvcm9vdC9jb2RlL2dpdGh1Yi1ldmVudHMvc3JjL2FwcC5qcyIsIi9yb290L2NvZGUvZ2l0aHViLWV2ZW50cy9zcmMvY29tcG9uZW50cy9kYXRlX3BpY2tlci5qcyIsIi9yb290L2NvZGUvZ2l0aHViLWV2ZW50cy9zcmMvY29tcG9uZW50cy9tb3N0X3N0YXJzLmpzIiwiL3Jvb3QvY29kZS9naXRodWItZXZlbnRzL3NyYy9jb21wb25lbnRzL25hdmlnYXRpb24uanMiLCIvcm9vdC9jb2RlL2dpdGh1Yi1ldmVudHMvc3JjL2NvbXBvbmVudHMvcmVwb3NfZmlsdGVyLmpzIiwiL3Jvb3QvY29kZS9naXRodWItZXZlbnRzL3NyYy9jb21wb25lbnRzL3JlcG9zX2xpc3QuanMiLCIvcm9vdC9jb2RlL2dpdGh1Yi1ldmVudHMvc3JjL2NvbXBvbmVudHMvcmVwb3NpdG9yeS5qcyIsIi9yb290L2NvZGUvZ2l0aHViLWV2ZW50cy9zcmMvY29ubmVjdF9oaXN0b3J5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7O3FCQ0FrQixPQUFPOzs7O3dCQUNKLFdBQVc7Ozs7MkJBQ1UsY0FBYzs7b0NBQ2pDLHlCQUF5Qjs7OztvQ0FDMUIseUJBQXlCOzs7O0lBRXpDLEdBQUc7WUFBSCxHQUFHOztXQUFILEdBQUc7MEJBQUgsR0FBRzs7K0JBQUgsR0FBRzs7O2VBQUgsR0FBRzs7V0FDRCxrQkFBRztBQUNQLGFBQ0U7OztRQUNFLHlFQUFjO1FBQ2Q7O1lBQUssU0FBUyxFQUFDLFdBQVc7VUFDdkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRO1NBQ2hCO09BQ0YsQ0FDTjtLQUNIOzs7U0FWRyxHQUFHO0dBQVMsbUJBQU0sU0FBUzs7QUFhakMsc0JBQVMsTUFBTSxDQUNiOzs7RUFDRTs7TUFBTyxJQUFJLEVBQUMsR0FBRyxFQUFDLFNBQVMs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QUMsS0FBSyxJQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxBQUFDLElBQUcsQ0FBQTtLQUM1RDtHQUNGLENBQUMsQ0FBQTtDQUNIIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XG5pbXBvcnQgeyBSb3V0ZXIsIFJvdXRlLCBJbmRleFJvdXRlIH0gZnJvbSBcInJlYWN0LXJvdXRlclwiO1xuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSBcIi4vY29tcG9uZW50cy9uYXZpZ2F0aW9uXCI7XG5pbXBvcnQgTW9zdFN0YXJzIGZyb20gXCIuL2NvbXBvbmVudHMvbW9zdF9zdGFyc1wiO1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxOYXZpZ2F0aW9uIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5SZWFjdERPTS5yZW5kZXIoXG4gIDxSb3V0ZXI+XG4gICAgPFJvdXRlIHBhdGg9XCIvXCIgY29tcG9uZW50PXtBcHB9PlxuICAgICAgPEluZGV4Um91dGUgY29tcG9uZW50PXtNb3N0U3RhcnN9IC8+XG4gICAgICA8Um91dGUgcGF0aD1cIm1vc3Rfc3RhcnMoLzpkYXRlKVwiIGNvbXBvbmVudD17TW9zdFN0YXJzfSAvPlxuICAgIDwvUm91dGU+XG4gIDwvUm91dGVyPixcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpXG4pO1xuXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUGlrYWRheSBmcm9tIFwicGlrYWRheVwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhdGVQaWNrZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGxldCBwcm9wcyA9IHRoaXMucHJvcHM7XG5cbiAgICBuZXcgUGlrYWRheSh7XG4gICAgICBmaWVsZDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocHJvcHMuaWQpLFxuICAgICAgZGVmYXVsdERhdGU6IHByb3BzLmRhdGUsXG4gICAgICBtaW5EYXRlOiBwcm9wcy5taW5EYXRlLFxuICAgICAgbWF4RGF0ZTogcHJvcHMubWF4RGF0ZSxcbiAgICAgIG9uU2VsZWN0OiBwcm9wcy5oYW5kbGVEYXRlU2VsZWN0ZWRcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiZm9ybS1pbmxpbmVcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9e3RoaXMucHJvcHMuaWR9PkNob29zZSBEYXRlPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgaWQ9e3RoaXMucHJvcHMuaWR9XG4gICAgICAgICAgICB2YWx1ZT17dGhpcy5wcm9wcy5kYXRlfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Zvcm0+XG4gICAgKVxuICB9XG59XG5cbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHJlcXVlc3QgZnJvbSBcInN1cGVyYWdlbnRcIlxuaW1wb3J0IG1vbWVudCBmcm9tIFwibW9tZW50XCJcbmltcG9ydCBjb25uZWN0SGlzdG9yeSBmcm9tIFwiLi4vY29ubmVjdF9oaXN0b3J5XCJcbmltcG9ydCBEYXRlUGlja2VyIGZyb20gXCIuL2RhdGVfcGlja2VyXCJcbmltcG9ydCBSZXBvc0ZpbHRlciBmcm9tIFwiLi9yZXBvc19maWx0ZXJcIlxuaW1wb3J0IFJlcG9zTGlzdCBmcm9tIFwiLi9yZXBvc19saXN0XCJcblxuY2xhc3MgTW9zdFN0YXJzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICByZXBvczogW10sXG4gICAgICBmaWx0ZXI6IFwibmV3XCJcbiAgICB9O1xuICAgIHRoaXMuaGFuZGxlRGF0ZVNlbGVjdGVkID0gdGhpcy5oYW5kbGVEYXRlU2VsZWN0ZWQuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZUZpbHRlckNoYW5nZWQgPSB0aGlzLmhhbmRsZUZpbHRlckNoYW5nZWQuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGN1ckRhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMucGFyYW1zLmRhdGUgfHwgbW9tZW50KCkuc3VidHJhY3QoMiwgXCJkYXlzXCIpLmZvcm1hdChcIllZWVktTU0tRERcIik7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLmZldGNoRGF0YSgpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlIChwcmV2UHJvcHMpIHtcbiAgICBsZXQgb2xkRGF0ZSA9IHByZXZQcm9wcy5wYXJhbXMuZGF0ZTtcbiAgICBsZXQgbmV3RGF0ZSA9IHRoaXMucHJvcHMucGFyYW1zLmRhdGU7XG5cbiAgICBpZiAobmV3RGF0ZSAhPT0gb2xkRGF0ZSkge1xuICAgICAgdGhpcy5mZXRjaERhdGEoKTtcbiAgICB9XG4gIH1cblxuICBmZXRjaERhdGEoKSB7XG4gICAgcmVxdWVzdFxuICAgIC5nZXQoYGRhdGEvbW9zdF9zdGFycy8ke3RoaXMuY3VyRGF0ZSgpfS5qc29uYClcbiAgICAuZW5kKChlcnIsIHJlcykgPT4ge1xuICAgICAgaWYgKHJlcy5ib2R5ID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBsZXQgcmVwb3MgPSB0aGlzLmFwcGVuZFBlcmNlbnRhZ2UocmVzLmJvZHkpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHJlcG9zOiByZXBvc1xuICAgICAgfSk7XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIGFwcGVuZFBlcmNlbnRhZ2UocmVwb3MpIHtcbiAgICByZXR1cm4gcmVwb3MubWFwKChyZXBvKSA9PiB7XG4gICAgICByZXBvLnBlcmNlbnRhZ2UgPSByZXBvLmRhaWx5X3dhdGNoZXJzX2NvdW50ICogMTAwLjAgLyByZXBvLndhdGNoZXJzX2NvdW50O1xuICAgICAgcmV0dXJuIHJlcG87XG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVEYXRlU2VsZWN0ZWQoZGF0ZSkge1xuICAgIGxldCBkYXRlU3RyID0gbW9tZW50KGRhdGUpLmZvcm1hdChcIllZWVktTU0tRERcIilcbiAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaFN0YXRlKG51bGwsIGAvbW9zdF9zdGFycy8ke2RhdGVTdHJ9YCk7XG4gIH1cblxuICBoYW5kbGVGaWx0ZXJDaGFuZ2VkKGZpbHRlcikge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZmlsdGVyOiBmaWx0ZXJcbiAgICB9KTtcbiAgfVxuXG4gIGZpbHRlclJlcG9zKCkge1xuICAgIGxldCBmaWx0ZXIgPSB0aGlzLnN0YXRlLmZpbHRlcjtcblxuICAgIHJldHVybiB0aGlzLnN0YXRlLnJlcG9zLmZpbHRlciggKHJlcG8pID0+IHtcbiAgICAgIGlmIChmaWx0ZXIgPT0gXCJuZXdcIikge1xuICAgICAgICByZXR1cm4gcmVwby5wZXJjZW50YWdlID49IDIwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IG1pbkRhdGUgPSBuZXcgRGF0ZShcIjIwMTUtMTAtMDFcIik7XG4gICAgbGV0IG1heERhdGUgPSBtb21lbnQoKS5zdWJ0cmFjdCgxLCBcImRheXNcIikudG9EYXRlKCk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGgyPk1vc3Qgc3RhcnJlZCByZXBvcyBieSBkYXk8L2gyPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB1bGwtbGVmdFwiPlxuICAgICAgICAgIDxEYXRlUGlja2VyXG4gICAgICAgICAgICBpZD1cImRhdGUtcGlja2VyXCJcbiAgICAgICAgICAgIG1pbkRhdGU9e21pbkRhdGV9XG4gICAgICAgICAgICBtYXhEYXRlPXttYXhEYXRlfVxuICAgICAgICAgICAgZGF0ZT17dGhpcy5jdXJEYXRlKCl9XG4gICAgICAgICAgICBoYW5kbGVEYXRlU2VsZWN0ZWQ9e3RoaXMuaGFuZGxlRGF0ZVNlbGVjdGVkfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdWxsLXJpZ2h0XCI+XG4gICAgICAgICAgPFJlcG9zRmlsdGVyXG4gICAgICAgICAgICBmaWx0ZXI9e3RoaXMuc3RhdGUuZmlsdGVyfVxuICAgICAgICAgICAgb25GaWx0ZXJDaGFuZ2U9e3RoaXMuaGFuZGxlRmlsdGVyQ2hhbmdlZH0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xlYXJmaXhcIiAvPlxuICAgICAgICA8cC8+XG4gICAgICAgIDxSZXBvc0xpc3QgcmVwb3M9e3RoaXMuZmlsdGVyUmVwb3MoKX0gLz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0SGlzdG9yeShNb3N0U3RhcnMpXG5cbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7TmF2YmFyLCBOYXZCcmFuZH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOYXZpZ2F0aW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8TmF2YmFyIHRvZ2dsZU5hdktleT17MH0+XG4gICAgICAgIDxOYXZCcmFuZD5HaXRodWIgRXZlbnRzPC9OYXZCcmFuZD5cbiAgICAgIDwvTmF2YmFyPlxuICAgIClcbiAgfTtcbn1cblxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQge0J1dHRvblRvb2xiYXIsIEJ1dHRvbn0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlcG9zRmlsdGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuaGFuZGxlTmV3ID0gdGhpcy5oYW5kbGVOZXcuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZUFsbCA9IHRoaXMuaGFuZGxlQWxsLmJpbmQodGhpcyk7XG4gIH1cblxuICBoYW5kbGVOZXcoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMuZmlsdGVyICE9IFwibmV3XCIpIHtcbiAgICAgIHRoaXMucHJvcHMub25GaWx0ZXJDaGFuZ2UoXCJuZXdcIik7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlQWxsKCkge1xuICAgIGlmICh0aGlzLnByb3BzLmZpbHRlciAhPSBcImFsbFwiKSB7XG4gICAgICB0aGlzLnByb3BzLm9uRmlsdGVyQ2hhbmdlKFwiYWxsXCIpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgbmV3QWN0aXZlID0gdGhpcy5wcm9wcy5maWx0ZXIgPT09IFwibmV3XCI7XG4gICAgbGV0IGFsbEFjdGl2ZSA9IHRoaXMucHJvcHMuZmlsdGVyID09PSBcImFsbFwiO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxCdXR0b25Ub29sYmFyPlxuICAgICAgICA8QnV0dG9uIGFjdGl2ZT17bmV3QWN0aXZlfSBvbkNsaWNrPXt0aGlzLmhhbmRsZU5ld30+TmV3PC9CdXR0b24+XG4gICAgICAgIDxCdXR0b24gYWN0aXZlPXthbGxBY3RpdmV9IG9uQ2xpY2s9e3RoaXMuaGFuZGxlQWxsfT5BbGw8L0J1dHRvbj5cbiAgICAgIDwvQnV0dG9uVG9vbGJhcj5cbiAgICApO1xuICB9XG59XG5cblJlcG9zRmlsdGVyLnByb3BUeXBlcyA9IHtcbiAgZmlsdGVyOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICBvbkZpbHRlckNoYW5nZTogUmVhY3QuUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxufVxuXG5SZXBvc0ZpbHRlci5kZWZhdWx0UHJvcHMgPSB7XG4gIGZpbHRlcjogXCJuZXdcIlxufVxuXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7TGlzdEdyb3VwLCBMaXN0R3JvdXBJdGVtfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCJcbmltcG9ydCBSZXBvc2l0b3J5IGZyb20gXCIuL3JlcG9zaXRvcnlcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXBvc0xpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgcmVwb3MgPSB0aGlzLnByb3BzLnJlcG9zLm1hcCgocmVwbykgPT4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPExpc3RHcm91cEl0ZW0ga2V5PXtyZXBvLmlkfT5cbiAgICAgICAgICA8UmVwb3NpdG9yeSByZXBvPXtyZXBvfSAvPlxuICAgICAgICA8L0xpc3RHcm91cEl0ZW0+XG4gICAgICApO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxMaXN0R3JvdXA+XG4gICAgICAgIHtyZXBvc31cbiAgICAgIDwvTGlzdEdyb3VwPlxuICAgIClcbiAgfVxufVxuXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlcG9zaXRvcnkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgbGV0IHJlcG8gPSB0aGlzLnByb3BzLnJlcG87XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGgzPjxhIGhyZWY9e3JlcG8uaHRtbF91cmx9PntyZXBvLmZ1bGxfbmFtZX08L2E+PC9oMz5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwibGVhZFwiPlxuICAgICAgICAgIHtyZXBvLmRlc2NyaXB0aW9ufVxuICAgICAgICA8L3A+XG4gICAgICAgIDxwPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImdseXBoaWNvbiBnbHlwaGljb24tc3RhclwiPjwvc3Bhbj5cbiAgICAgICAgICA8c3Bhbj4ge3JlcG8uZGFpbHlfd2F0Y2hlcnNfY291bnR9PC9zcGFuPlxuICAgICAgICAgIDxzcGFuPi97cmVwby53YXRjaGVyc19jb3VudH08L3NwYW4+XG4gICAgICAgICAgPHNwYW4+ICh7cmVwby5wZXJjZW50YWdlLnRvRml4ZWQoMil9JSk8L3NwYW4+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHVsbC1yaWdodFwiPntyZXBvLmxhbmd1YWdlfTwvc3Bhbj5cbiAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9O1xufVxuXG5SZXBvc2l0b3J5LnByb3BUeXBlcyA9IHtcbiAgcmVwbzogUmVhY3QuUHJvcFR5cGVzLm9iamVjdFxufVxuXG5SZXBvc2l0b3J5LmRlZmF1bHRQcm9wcyA9IHtcbiAgcmVwbzoge1xuICAgIGlkOiAxLFxuICAgIGZ1bGxfbmFtZTogXCJmYWNlYm9vay9yZWFjdFwiLFxuICAgIGh0bWxfdXJsOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkEgZGVjbGFyYXRpdmUsIGVmZmljaWVudCwgYW5kIGZsZXhpYmxlIEphdmFTY3JpcHQgbGlicmFyeSBmb3IgYnVpbGRpbmcgdXNlciBpbnRlcmZhY2VzLlwiLFxuICAgIGNyZWF0ZWRfYXQ6IFwiMjAxMy0wMS0wMSAwOTowMDowMCBVVENcIixcbiAgICBsYW5ndWFnZTogXCJKYXZhU2NyaXB0XCIsXG4gICAgd2F0Y2hlcnNfY291bnQ6IFwiMTIzXCIsXG4gICAgbmV0d29ya19jb3VudDogXCIyM1wiLFxuICAgIGRhaWx5X3dhdGNoZXJzX2NvdW50OiBcIjQ1XCJcbiAgfVxufTtcblxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBIaXN0b3J5IH0gZnJvbSBcInJlYWN0LXJvdXRlclwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbm5lY3RIaXN0b3J5KENvbXBvbmVudCkge1xuICByZXR1cm4gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgIG1peGluczogWyBIaXN0b3J5IF0sXG4gICAgcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIDxDb21wb25lbnQgey4uLnRoaXMucHJvcHN9IGhpc3Rvcnk9e3RoaXMuaGlzdG9yeX0gLz5cbiAgICB9XG4gIH0pXG59XG5cbiJdfQ==
