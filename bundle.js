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
        { className: "form-inline pull-right" },
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

var _repos_list = require("./repos_list");

var _repos_list2 = _interopRequireDefault(_repos_list);

var MostStars = (function (_React$Component) {
  _inherits(MostStars, _React$Component);

  function MostStars(props) {
    _classCallCheck(this, MostStars);

    _get(Object.getPrototypeOf(MostStars.prototype), "constructor", this).call(this, props);

    this.state = {
      repos: []
    };
    this.handleDateSelected = this.handleDateSelected.bind(this);
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

        _this.setState({
          repos: res.body
        });
      }).bind(this));
    }
  }, {
    key: "handleDateSelected",
    value: function handleDateSelected(date) {
      var dateStr = (0, _moment2["default"])(date).format("YYYY-MM-DD");
      this.props.history.pushState(null, "/most_stars/" + dateStr);
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
        _react2["default"].createElement(_date_picker2["default"], {
          id: "date-picker",
          minDate: minDate,
          maxDate: maxDate,
          date: this.curDate(),
          handleDateSelected: this.handleDateSelected }),
        _react2["default"].createElement("div", { className: "clearfix" }),
        _react2["default"].createElement("p", null),
        _react2["default"].createElement(_repos_list2["default"], { repos: this.state.repos })
      );
    }
  }]);

  return MostStars;
})(_react2["default"].Component);

exports["default"] = (0, _connect_history2["default"])(MostStars);
module.exports = exports["default"];

},{"../connect_history":7,"./date_picker":2,"./repos_list":5,"moment":"moment","react":"react","superagent":"superagent"}],4:[function(require,module,exports){
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

},{"./repository":6,"react":"react","react-bootstrap":"react-bootstrap"}],6:[function(require,module,exports){
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
      return _react2["default"].createElement(
        "div",
        null,
        _react2["default"].createElement(
          "h3",
          null,
          _react2["default"].createElement(
            "a",
            { href: this.props.repo.html_url },
            this.props.repo.full_name
          )
        ),
        _react2["default"].createElement(
          "p",
          { className: "lead" },
          this.props.repo.description
        ),
        _react2["default"].createElement(
          "p",
          null,
          _react2["default"].createElement("span", { className: "glyphicon glyphicon-star" }),
          _react2["default"].createElement(
            "span",
            null,
            " ",
            this.props.repo.daily_watchers_count
          ),
          _react2["default"].createElement(
            "span",
            null,
            "/",
            this.props.repo.watchers_count
          ),
          _react2["default"].createElement(
            "span",
            { className: "pull-right" },
            this.props.repo.language
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

},{"react":"react"}],7:[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvcm9vdC9jb2RlL2dpdGh1Yi1ldmVudHMvc3JjL2FwcC5qcyIsIi9yb290L2NvZGUvZ2l0aHViLWV2ZW50cy9zcmMvY29tcG9uZW50cy9kYXRlX3BpY2tlci5qcyIsIi9yb290L2NvZGUvZ2l0aHViLWV2ZW50cy9zcmMvY29tcG9uZW50cy9tb3N0X3N0YXJzLmpzIiwiL3Jvb3QvY29kZS9naXRodWItZXZlbnRzL3NyYy9jb21wb25lbnRzL25hdmlnYXRpb24uanMiLCIvcm9vdC9jb2RlL2dpdGh1Yi1ldmVudHMvc3JjL2NvbXBvbmVudHMvcmVwb3NfbGlzdC5qcyIsIi9yb290L2NvZGUvZ2l0aHViLWV2ZW50cy9zcmMvY29tcG9uZW50cy9yZXBvc2l0b3J5LmpzIiwiL3Jvb3QvY29kZS9naXRodWItZXZlbnRzL3NyYy9jb25uZWN0X2hpc3RvcnkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7cUJDQWtCLE9BQU87Ozs7d0JBQ0osV0FBVzs7OzsyQkFDVSxjQUFjOztvQ0FDakMseUJBQXlCOzs7O29DQUMxQix5QkFBeUI7Ozs7SUFFekMsR0FBRztZQUFILEdBQUc7O1dBQUgsR0FBRzswQkFBSCxHQUFHOzsrQkFBSCxHQUFHOzs7ZUFBSCxHQUFHOztXQUNELGtCQUFHO0FBQ1AsYUFDRTs7O1FBQ0UseUVBQWM7UUFDZDs7WUFBSyxTQUFTLEVBQUMsV0FBVztVQUN2QixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVE7U0FDaEI7T0FDRixDQUNOO0tBQ0g7OztTQVZHLEdBQUc7R0FBUyxtQkFBTSxTQUFTOztBQWFqQyxzQkFBUyxNQUFNLENBQ2I7OztFQUNFOztNQUFPLElBQUksRUFBQyxHQUFHLEVBQUMsU0FBUyxFQUFFLEdBQUcsQUFBQztJQUM3Qiw0REFBWSxTQUFTLG1DQUFZLEdBQUc7SUFDcEMsdURBQU8sSUFB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RUFBQyxZQUFZO1lBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUTtXQUFRO1NBQzVEO09BQ0EsQ0FDUDtLQUNGOzs7U0FoQmtCLFVBQVU7R0FBUyxtQkFBTSxTQUFTOztxQkFBbEMsVUFBVTs7QUFtQi9CLFVBQVUsQ0FBQyxTQUFTLEdBQUc7QUFDckIsTUFBSSxFQUFFLG1CQUFNLFNBQVMsQ0FBQyxNQUFNO0NBQzdCLENBQUE7O0FBRUQsVUFBVSxDQUFDLFlBQVksR0FBRztBQUN4QixNQUFJLEVBQUU7QUFDSixNQUFFLEVBQUUsQ0FBQztBQUNMLGFBQVMsRUFBRSxnQkFBZ0I7QUFDM0IsWUFBUSxFQUFFLG1DQUFtQztBQUM3QyxlQUFXLEVBQUUseUZBQXlGO0FBQ3RHLGNBQVUsRUFBRSx5QkFBeUI7QUFDckMsWUFBUSxFQUFFLFlBQVk7QUFDdEIsa0JBQWMsRUFBRSxLQUFLO0FBQ3JCLGlCQUFhLEVBQUUsSUFBSTtBQUNuQix3QkFBb0IsRUFBRSxJQUFJO0dBQzNCO0NBQ0YsQ0FBQzs7Ozs7Ozs7Ozs7O3FCQ2xDc0IsY0FBYzs7OztxQkFIcEIsT0FBTzs7OzsyQkFDRCxjQUFjOztBQUV2QixTQUFTLGNBQWMsQ0FBQyxTQUFTLEVBQUU7QUFDaEQsU0FBTyxtQkFBTSxXQUFXLENBQUM7QUFDdkIsVUFBTSxFQUFFLHNCQUFXO0FBQ25CLFVBQU0sRUFBQSxrQkFBRztBQUNQLGFBQU8saUNBQUMsU0FBUyxlQUFLLElBQUksQ0FBQyxLQUFLLElBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLEFBQUMsSUFBRyxDQUFBO0tBQzVEO0dBQ0YsQ0FBQyxDQUFBO0NBQ0giLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIjtcbmltcG9ydCB7IFJvdXRlciwgUm91dGUsIEluZGV4Um91dGUgfSBmcm9tIFwicmVhY3Qtcm91dGVyXCI7XG5pbXBvcnQgTmF2aWdhdGlvbiBmcm9tIFwiLi9jb21wb25lbnRzL25hdmlnYXRpb25cIjtcbmltcG9ydCBNb3N0U3RhcnMgZnJvbSBcIi4vY29tcG9uZW50cy9tb3N0X3N0YXJzXCI7XG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPE5hdmlnYXRpb24gLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cblJlYWN0RE9NLnJlbmRlcihcbiAgPFJvdXRlcj5cbiAgICA8Um91dGUgcGF0aD1cIi9cIiBjb21wb25lbnQ9e0FwcH0+XG4gICAgICA8SW5kZXhSb3V0ZSBjb21wb25lbnQ9e01vc3RTdGFyc30gLz5cbiAgICAgIDxSb3V0ZSBwYXRoPVwibW9zdF9zdGFycygvOmRhdGUpXCIgY29tcG9uZW50PXtNb3N0U3RhcnN9IC8+XG4gICAgPC9Sb3V0ZT5cbiAgPC9Sb3V0ZXI+LFxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIilcbik7XG5cbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQaWthZGF5IGZyb20gXCJwaWthZGF5XCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGF0ZVBpY2tlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgbGV0IHByb3BzID0gdGhpcy5wcm9wcztcblxuICAgIG5ldyBQaWthZGF5KHtcbiAgICAgIGZpZWxkOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwcm9wcy5pZCksXG4gICAgICBkZWZhdWx0RGF0ZTogcHJvcHMuZGF0ZSxcbiAgICAgIG1pbkRhdGU6IHByb3BzLm1pbkRhdGUsXG4gICAgICBtYXhEYXRlOiBwcm9wcy5tYXhEYXRlLFxuICAgICAgb25TZWxlY3Q6IHByb3BzLmhhbmRsZURhdGVTZWxlY3RlZFxuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8Zm9ybSBjbGFzc05hbWU9XCJmb3JtLWlubGluZSBwdWxsLXJpZ2h0XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPXt0aGlzLnByb3BzLmlkfT5DaG9vc2UgRGF0ZTwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIGlkPXt0aGlzLnByb3BzLmlkfVxuICAgICAgICAgICAgdmFsdWU9e3RoaXMucHJvcHMuZGF0ZX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9mb3JtPlxuICAgIClcbiAgfVxufVxuXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCByZXF1ZXN0IGZyb20gXCJzdXBlcmFnZW50XCJcbmltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudFwiXG5pbXBvcnQgY29ubmVjdEhpc3RvcnkgZnJvbSBcIi4uL2Nvbm5lY3RfaGlzdG9yeVwiXG5pbXBvcnQgRGF0ZVBpY2tlciBmcm9tIFwiLi9kYXRlX3BpY2tlclwiXG5pbXBvcnQgUmVwb3NMaXN0IGZyb20gXCIuL3JlcG9zX2xpc3RcIlxuXG5jbGFzcyBNb3N0U3RhcnMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHJlcG9zOiBbXVxuICAgIH07XG4gICAgdGhpcy5oYW5kbGVEYXRlU2VsZWN0ZWQgPSB0aGlzLmhhbmRsZURhdGVTZWxlY3RlZC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgY3VyRGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5wYXJhbXMuZGF0ZSB8fCBcIjIwMTUtMTAtMTJcIlxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5mZXRjaERhdGEoKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZSAocHJldlByb3BzKSB7XG4gICAgbGV0IG9sZERhdGUgPSBwcmV2UHJvcHMucGFyYW1zLmRhdGU7XG4gICAgbGV0IG5ld0RhdGUgPSB0aGlzLnByb3BzLnBhcmFtcy5kYXRlO1xuXG4gICAgaWYgKG5ld0RhdGUgIT09IG9sZERhdGUpIHtcbiAgICAgIHRoaXMuZmV0Y2hEYXRhKCk7XG4gICAgfVxuICB9XG5cbiAgZmV0Y2hEYXRhKCkge1xuICAgIHJlcXVlc3RcbiAgICAuZ2V0KGBkYXRhL21vc3Rfc3RhcnMvJHt0aGlzLmN1ckRhdGUoKX0uanNvbmApXG4gICAgLmVuZCgoZXJyLCByZXMpID0+IHtcbiAgICAgIGlmIChyZXMuYm9keSA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHJlcG9zOiByZXMuYm9keVxuICAgICAgfSk7XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIGhhbmRsZURhdGVTZWxlY3RlZChkYXRlKSB7XG4gICAgbGV0IGRhdGVTdHIgPSBtb21lbnQoZGF0ZSkuZm9ybWF0KFwiWVlZWS1NTS1ERFwiKVxuICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoU3RhdGUobnVsbCwgYC9tb3N0X3N0YXJzLyR7ZGF0ZVN0cn1gKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgbWluRGF0ZSA9IG5ldyBEYXRlKFwiMjAxNS0xMC0wMVwiKTtcbiAgICBsZXQgbWF4RGF0ZSA9IG1vbWVudCgpLnN1YnRyYWN0KDEsIFwiZGF5c1wiKS50b0RhdGUoKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDI+TW9zdCBzdGFycmVkIHJlcG9zIGJ5IGRheTwvaDI+XG4gICAgICAgIDxEYXRlUGlja2VyXG4gICAgICAgICAgaWQ9XCJkYXRlLXBpY2tlclwiXG4gICAgICAgICAgbWluRGF0ZT17bWluRGF0ZX1cbiAgICAgICAgICBtYXhEYXRlPXttYXhEYXRlfVxuICAgICAgICAgIGRhdGU9e3RoaXMuY3VyRGF0ZSgpfVxuICAgICAgICAgIGhhbmRsZURhdGVTZWxlY3RlZD17dGhpcy5oYW5kbGVEYXRlU2VsZWN0ZWR9Lz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbGVhcmZpeFwiIC8+XG4gICAgICAgIDxwLz5cbiAgICAgICAgPFJlcG9zTGlzdCByZXBvcz17dGhpcy5zdGF0ZS5yZXBvc30gLz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0SGlzdG9yeShNb3N0U3RhcnMpXG5cbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7TmF2YmFyLCBOYXZCcmFuZH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOYXZpZ2F0aW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8TmF2YmFyIHRvZ2dsZU5hdktleT17MH0+XG4gICAgICAgIDxOYXZCcmFuZD5HaXRodWIgRXZlbnRzPC9OYXZCcmFuZD5cbiAgICAgIDwvTmF2YmFyPlxuICAgIClcbiAgfTtcbn1cblxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQge0xpc3RHcm91cCwgTGlzdEdyb3VwSXRlbX0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiXG5pbXBvcnQgUmVwb3NpdG9yeSBmcm9tIFwiLi9yZXBvc2l0b3J5XCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVwb3NMaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHJlcG9zID0gdGhpcy5wcm9wcy5yZXBvcy5tYXAoKHJlcG8pID0+IHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxMaXN0R3JvdXBJdGVtIGtleT17cmVwby5pZH0+XG4gICAgICAgICAgPFJlcG9zaXRvcnkgcmVwbz17cmVwb30gLz5cbiAgICAgICAgPC9MaXN0R3JvdXBJdGVtPlxuICAgICAgKTtcbiAgICB9KTtcblxuICAgIHJldHVybiAoXG4gICAgICA8TGlzdEdyb3VwPlxuICAgICAgICB7cmVwb3N9XG4gICAgICA8L0xpc3RHcm91cD5cbiAgICApXG4gIH1cbn1cblxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXBvc2l0b3J5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDM+PGEgaHJlZj17dGhpcy5wcm9wcy5yZXBvLmh0bWxfdXJsfT57dGhpcy5wcm9wcy5yZXBvLmZ1bGxfbmFtZX08L2E+PC9oMz5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwibGVhZFwiPlxuICAgICAgICAgIHt0aGlzLnByb3BzLnJlcG8uZGVzY3JpcHRpb259XG4gICAgICAgIDwvcD5cbiAgICAgICAgPHA+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1zdGFyXCI+PC9zcGFuPlxuICAgICAgICAgIDxzcGFuPiB7dGhpcy5wcm9wcy5yZXBvLmRhaWx5X3dhdGNoZXJzX2NvdW50fTwvc3Bhbj5cbiAgICAgICAgICA8c3Bhbj4ve3RoaXMucHJvcHMucmVwby53YXRjaGVyc19jb3VudH08L3NwYW4+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHVsbC1yaWdodFwiPnt0aGlzLnByb3BzLnJlcG8ubGFuZ3VhZ2V9PC9zcGFuPlxuICAgICAgICA8L3A+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH07XG59XG5cblJlcG9zaXRvcnkucHJvcFR5cGVzID0ge1xuICByZXBvOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0XG59XG5cblJlcG9zaXRvcnkuZGVmYXVsdFByb3BzID0ge1xuICByZXBvOiB7XG4gICAgaWQ6IDEsXG4gICAgZnVsbF9uYW1lOiBcImZhY2Vib29rL3JlYWN0XCIsXG4gICAgaHRtbF91cmw6IFwiaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0XCIsXG4gICAgZGVzY3JpcHRpb246IFwiQSBkZWNsYXJhdGl2ZSwgZWZmaWNpZW50LCBhbmQgZmxleGlibGUgSmF2YVNjcmlwdCBsaWJyYXJ5IGZvciBidWlsZGluZyB1c2VyIGludGVyZmFjZXMuXCIsXG4gICAgY3JlYXRlZF9hdDogXCIyMDEzLTAxLTAxIDA5OjAwOjAwIFVUQ1wiLFxuICAgIGxhbmd1YWdlOiBcIkphdmFTY3JpcHRcIixcbiAgICB3YXRjaGVyc19jb3VudDogXCIxMjNcIixcbiAgICBuZXR3b3JrX2NvdW50OiBcIjIzXCIsXG4gICAgZGFpbHlfd2F0Y2hlcnNfY291bnQ6IFwiNDVcIlxuICB9XG59O1xuXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IEhpc3RvcnkgfSBmcm9tIFwicmVhY3Qtcm91dGVyXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29ubmVjdEhpc3RvcnkoQ29tcG9uZW50KSB7XG4gIHJldHVybiBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAgbWl4aW5zOiBbIEhpc3RvcnkgXSxcbiAgICByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gPENvbXBvbmVudCB7Li4udGhpcy5wcm9wc30gaGlzdG9yeT17dGhpcy5oaXN0b3J5fSAvPlxuICAgIH1cbiAgfSlcbn1cblxuIl19
