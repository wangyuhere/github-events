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
          _react2["default"].createElement(_componentsMost_stars2["default"], null)
        )
      );
    }
  }]);

  return App;
})(_react2["default"].Component);

_reactDom2["default"].render(_react2["default"].createElement(App, null), document.getElementById("content"));

},{"./components/most_stars":2,"./components/navigation":3,"react":"react","react-dom":"react-dom"}],2:[function(require,module,exports){
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

var _reactBootstrap = require("react-bootstrap");

var _moment = require("moment");

var _moment2 = _interopRequireDefault(_moment);

var _pikaday = require("pikaday");

var _pikaday2 = _interopRequireDefault(_pikaday);

var _repository = require("./repository");

var _repository2 = _interopRequireDefault(_repository);

var MostStars = (function (_React$Component) {
  _inherits(MostStars, _React$Component);

  function MostStars(props) {
    _classCallCheck(this, MostStars);

    _get(Object.getPrototypeOf(MostStars.prototype), "constructor", this).call(this, props);
    this.state = {
      repos: [],
      date: "2015-10-12"
    };
    this.handleDateSelected = this.handleDateSelected.bind(this);
  }

  _createClass(MostStars, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.fetchData();
      var _this = this;

      new _pikaday2["default"]({
        field: document.getElementById("date-picker"),
        defaultDate: _this.state.date,
        minDate: new Date("2015-10-10"),
        maxDate: (0, _moment2["default"])().subtract(1, "days").toDate(),
        onSelect: _this.handleDateSelected
      });
    }
  }, {
    key: "fetchData",
    value: function fetchData() {
      var _this2 = this;

      _superagent2["default"].get("data/most_stars/" + this.state.date + ".json").end((function (err, res) {
        if (res.body == null) {
          return;
        }

        _this2.setState({
          repos: res.body
        });
      }).bind(this));
    }
  }, {
    key: "handleDateSelected",
    value: function handleDateSelected(date) {
      this.setState({ date: (0, _moment2["default"])(date).format("YYYY-MM-DD") });
      this.fetchData();
    }
  }, {
    key: "render",
    value: function render() {
      var repos = this.state.repos.map(function (repo) {
        return _react2["default"].createElement(
          _reactBootstrap.ListGroupItem,
          { key: repo.id },
          _react2["default"].createElement(_repository2["default"], { repo: repo })
        );
      });

      return _react2["default"].createElement(
        "div",
        null,
        _react2["default"].createElement(
          "h2",
          null,
          "Most starred repos by day"
        ),
        _react2["default"].createElement(
          "form",
          { className: "form-inline pull-right" },
          _react2["default"].createElement(
            "div",
            { className: "form-group" },
            _react2["default"].createElement(
              "label",
              { "for": "date-picker" },
              "Choose Date"
            ),
            _react2["default"].createElement("input", { type: "text",
              id: "date-picker",
              value: this.state.date,
              className: "form-control" })
          )
        ),
        _react2["default"].createElement("div", { className: "clearfix" }),
        _react2["default"].createElement("p", null),
        _react2["default"].createElement(
          _reactBootstrap.ListGroup,
          null,
          repos
        )
      );
    }
  }]);

  return MostStars;
})(_react2["default"].Component);

exports["default"] = MostStars;
module.exports = exports["default"];

},{"./repository":4,"moment":"moment","pikaday":"pikaday","react":"react","react-bootstrap":"react-bootstrap","superagent":"superagent"}],3:[function(require,module,exports){
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

},{"react":"react","react-bootstrap":"react-bootstrap"}],4:[function(require,module,exports){
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

},{"react":"react"}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMveXV3YW5nL1Byb2plY3RzL2dpdGh1Yi1ldmVudHMvc3JjL2FwcC5qcyIsIi9Vc2Vycy95dXdhbmcvUHJvamVjdHMvZ2l0aHViLWV2ZW50cy9zcmMvY29tcG9uZW50cy9tb3N0X3N0YXJzLmpzIiwiL1VzZXJzL3l1d2FuZy9Qcm9qZWN0cy9naXRodWItZXZlbnRzL3NyYy9jb21wb25lbnRzL25hdmlnYXRpb24uanMiLCIvVXNlcnMveXV3YW5nL1Byb2plY3RzL2dpdGh1Yi1ldmVudHMvc3JjL2NvbXBvbmVudHMvcmVwb3NpdG9yeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7OztxQkNBa0IsT0FBTzs7Ozt3QkFDSixXQUFXOzs7O29DQUNULHlCQUF5Qjs7OztvQ0FDMUIseUJBQXlCOzs7O0lBRXpDLEdBQUc7WUFBSCxHQUFHOztXQUFILEdBQUc7MEJBQUgsR0FBRzs7K0JBQUgsR0FBRzs7O2VBQUgsR0FBRzs7V0FDRCxrQkFBRztBQUNQLGFBQ0U7OztRQUNFLHlFQUFjO1FBQ2Q7O1lBQUssU0FBUyxFQUFDLFdBQVc7VUFDeEIseUVBQWE7U0FDVDtPQUNGLENBQ047S0FDSDs7O1NBVkcsR0FBRztHQUFTLG1CQUFNLFNBQVM7O0FBYWpDLHNCQUFTLE1BQU0sQ0FDYixpQ0FBQyxHQUFHLE9BQUcsRUFDUCxRQUFRLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUNuQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O3FCQ3JCZ0IsT0FBTzs7OzswQkFDTCxZQUFZOzs7OzhCQUNPLGlCQUFpQjs7c0JBQ3JDLFFBQVE7Ozs7dUJBQ1AsU0FBUzs7OzswQkFDTixjQUFjOzs7O0lBRWhCLFNBQVM7WUFBVCxTQUFTOztBQUVqQixXQUZRLFNBQVMsQ0FFaEIsS0FBSyxFQUFFOzBCQUZBLFNBQVM7O0FBRzFCLCtCQUhp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QUFJO0dBQzNCO0NBQ0YsQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSBcIi4vY29tcG9uZW50cy9uYXZpZ2F0aW9uXCJcbmltcG9ydCBNb3N0U3RhcnMgZnJvbSBcIi4vY29tcG9uZW50cy9tb3N0X3N0YXJzXCJcblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8TmF2aWdhdGlvbiAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgIDxNb3N0U3RhcnMgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cblJlYWN0RE9NLnJlbmRlcihcbiAgPEFwcCAvPixcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpXG4pO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHJlcXVlc3QgZnJvbSBcInN1cGVyYWdlbnRcIlxuaW1wb3J0IHtMaXN0R3JvdXAsIExpc3RHcm91cEl0ZW19IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcbmltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudFwiXG5pbXBvcnQgUGlrYWRheSBmcm9tIFwicGlrYWRheVwiXG5pbXBvcnQgUmVwb3NpdG9yeSBmcm9tIFwiLi9yZXBvc2l0b3J5XCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9zdFN0YXJzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgcmVwb3M6IFtdLFxuICAgICAgZGF0ZTogXCIyMDE1LTEwLTEyXCJcbiAgICB9O1xuICAgIHRoaXMuaGFuZGxlRGF0ZVNlbGVjdGVkID0gdGhpcy5oYW5kbGVEYXRlU2VsZWN0ZWQuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuZmV0Y2hEYXRhKCk7XG4gICAgbGV0IF90aGlzID0gdGhpcztcblxuICAgIG5ldyBQaWthZGF5KHtcbiAgICAgIGZpZWxkOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhdGUtcGlja2VyXCIpLFxuICAgICAgZGVmYXVsdERhdGU6IF90aGlzLnN0YXRlLmRhdGUsXG4gICAgICBtaW5EYXRlOiBuZXcgRGF0ZShcIjIwMTUtMTAtMTBcIiksXG4gICAgICBtYXhEYXRlOiBtb21lbnQoKS5zdWJ0cmFjdCgxLCBcImRheXNcIikudG9EYXRlKCksXG4gICAgICBvblNlbGVjdDogX3RoaXMuaGFuZGxlRGF0ZVNlbGVjdGVkXG4gICAgfSk7XG4gIH1cblxuICBmZXRjaERhdGEoKSB7XG4gICAgcmVxdWVzdFxuICAgIC5nZXQoYGRhdGEvbW9zdF9zdGFycy8ke3RoaXMuc3RhdGUuZGF0ZX0uanNvbmApXG4gICAgLmVuZCgoZXJyLCByZXMpID0+IHtcbiAgICAgIGlmIChyZXMuYm9keSA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHJlcG9zOiByZXMuYm9keVxuICAgICAgfSk7XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIGhhbmRsZURhdGVTZWxlY3RlZChkYXRlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGRhdGU6IG1vbWVudChkYXRlKS5mb3JtYXQoXCJZWVlZLU1NLUREXCIpIH0pO1xuICAgIHRoaXMuZmV0Y2hEYXRhKCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHJlcG9zID0gdGhpcy5zdGF0ZS5yZXBvcy5tYXAoKHJlcG8pID0+IHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxMaXN0R3JvdXBJdGVtIGtleT17cmVwby5pZH0+XG4gICAgICAgICAgPFJlcG9zaXRvcnkgcmVwbz17cmVwb30gLz5cbiAgICAgICAgPC9MaXN0R3JvdXBJdGVtPlxuICAgICAgKTtcbiAgICB9KTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDI+TW9zdCBzdGFycmVkIHJlcG9zIGJ5IGRheTwvaDI+XG4gICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImZvcm0taW5saW5lIHB1bGwtcmlnaHRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJkYXRlLXBpY2tlclwiPkNob29zZSBEYXRlPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIGlkPVwiZGF0ZS1waWNrZXJcIlxuICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5kYXRlfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xlYXJmaXhcIiAvPlxuICAgICAgICA8cC8+XG4gICAgICAgIDxMaXN0R3JvdXA+XG4gICAgICAgICAge3JlcG9zfVxuICAgICAgICA8L0xpc3RHcm91cD5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfTtcbn1cblxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtOYXZiYXIsIE5hdkJyYW5kfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5hdmlnYXRpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxOYXZiYXIgdG9nZ2xlTmF2S2V5PXswfT5cbiAgICAgICAgPE5hdkJyYW5kPkdpdGh1YiBFdmVudHM8L05hdkJyYW5kPlxuICAgICAgPC9OYXZiYXI+XG4gICAgKVxuICB9O1xufVxuXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlcG9zaXRvcnkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMz48YSBocmVmPXt0aGlzLnByb3BzLnJlcG8uaHRtbF91cmx9Pnt0aGlzLnByb3BzLnJlcG8uZnVsbF9uYW1lfTwvYT48L2gzPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJsZWFkXCI+XG4gICAgICAgICAge3RoaXMucHJvcHMucmVwby5kZXNjcmlwdGlvbn1cbiAgICAgICAgPC9wPlxuICAgICAgICA8cD5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJnbHlwaGljb24gZ2x5cGhpY29uLXN0YXJcIj48L3NwYW4+XG4gICAgICAgICAgPHNwYW4+IHt0aGlzLnByb3BzLnJlcG8uZGFpbHlfd2F0Y2hlcnNfY291bnR9PC9zcGFuPlxuICAgICAgICAgIDxzcGFuPi97dGhpcy5wcm9wcy5yZXBvLndhdGNoZXJzX2NvdW50fTwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwdWxsLXJpZ2h0XCI+e3RoaXMucHJvcHMucmVwby5sYW5ndWFnZX08L3NwYW4+XG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfTtcbn1cblxuUmVwb3NpdG9yeS5wcm9wVHlwZXMgPSB7XG4gIHJlcG86IFJlYWN0LlByb3BUeXBlcy5vYmplY3Rcbn1cblxuUmVwb3NpdG9yeS5kZWZhdWx0UHJvcHMgPSB7XG4gIHJlcG86IHtcbiAgICBpZDogMSxcbiAgICBmdWxsX25hbWU6IFwiZmFjZWJvb2svcmVhY3RcIixcbiAgICBodG1sX3VybDogXCJodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3RcIixcbiAgICBkZXNjcmlwdGlvbjogXCJBIGRlY2xhcmF0aXZlLCBlZmZpY2llbnQsIGFuZCBmbGV4aWJsZSBKYXZhU2NyaXB0IGxpYnJhcnkgZm9yIGJ1aWxkaW5nIHVzZXIgaW50ZXJmYWNlcy5cIixcbiAgICBjcmVhdGVkX2F0OiBcIjIwMTMtMDEtMDEgMDk6MDA6MDAgVVRDXCIsXG4gICAgbGFuZ3VhZ2U6IFwiSmF2YVNjcmlwdFwiLFxuICAgIHdhdGNoZXJzX2NvdW50OiBcIjEyM1wiLFxuICAgIG5ldHdvcmtfY291bnQ6IFwiMjNcIixcbiAgICBkYWlseV93YXRjaGVyc19jb3VudDogXCI0NVwiXG4gIH1cbn07XG5cbiJdfQ==
