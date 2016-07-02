'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./scrollTrigger');

require('./scrollTrigger.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var directions = ['Left', 'Right', 'Bottom', 'Up'];
var direction2property = {
  'Left': ['fromLeftIn', 'fromLeftOut'],
  'Right': ['fromRightIn', 'fromRightOut'],
  'Bottom': ['fromBottomIn', 'fromBottomOut'],
  'Up': ['scaleUpIn', 'scaleUpOut']
};
// const PageScroll = () => <div>PageScroll</div>;

var PageScroll = function (_Component) {
  _inherits(PageScroll, _Component);

  function PageScroll() {
    _classCallCheck(this, PageScroll);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(PageScroll).call(this));
  }

  _createClass(PageScroll, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      ScrollTrigger.init();
    }
  }, {
    key: 'getPagesJSX',
    value: function getPagesJSX() {
      var pages = this.props.pages;

      return pages.map(function (page, pageIdx) {
        var customized = page.customized;
        var content = page.content;

        if (!customized) {
          var contentJSX = content.map(function (word, wordIdx) {
            // pick a random element from the array
            var dataScroll = void 0;
            var direction = directions[Math.floor(Math.random() * directions.length)];
            var property = direction2property[direction];
            if (pageIdx === 0) {
              dataScroll = '0 ' + property[0] + ' ' + property[1];
            } else {
              dataScroll = '200 ' + property[0] + ' ' + property[1];
            }
            console.log(dataScroll);
            switch (wordIdx + 1) {
              case 1:
                return _react2.default.createElement(
                  'h1',
                  { 'data-scroll': dataScroll, key: wordIdx },
                  word
                );
              case 2:
                return _react2.default.createElement(
                  'h2',
                  { 'data-scroll': dataScroll, key: wordIdx },
                  word
                );
              case 3:
              default:
                return _react2.default.createElement(
                  'h3',
                  { 'data-scroll': dataScroll, key: wordIdx },
                  word
                );
            }
          });
          return _react2.default.createElement(
            'div',
            { className: 'block', key: pageIdx },
            contentJSX
          );
        } else {
          return _react2.default.createElement(
            'div',
            { className: 'block', key: pageIdx },
            content
          );
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var pagesJSX = this.getPagesJSX();
      return _react2.default.createElement(
        'div',
        null,
        pagesJSX
      );
    }
  }]);

  return PageScroll;
}(_react.Component);

PageScroll.propTypes = {
  pages: _react.PropTypes.arrayOf(_react.PropTypes.shape({
    customized: _react.PropTypes.bool,
    content: _react.PropTypes.oneOfType([_react.PropTypes.arrayOf(_react.PropTypes.string), _react.PropTypes.object])
  }))
};

exports.default = PageScroll;