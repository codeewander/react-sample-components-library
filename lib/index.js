'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var styled = _interopDefault(require('@emotion/styled'));
var Button = _interopDefault(require('@material-ui/core/Button'));

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    &.MuiButton-root {\n        padding: 8px 16px;\n        text-transform: none;\n        line-height: 1;\n        font-weight: 400;\n        font-family: 'Roboto', 'Noto Sans TC', 'Noto Sans SC';\n        font-size: 14px;\n        border-radius: 2px;\n    }\n    &.MuiButton-contained {\n        background-color: #00adef;\n        color: #ffffff;\n        &:hover {\n            background-color: #00b5f9;\n        }\n        &:focus {\n            background-color: #56d0ff;\n        }\n        &:active {\n            background-color: #8adfff;\n        }\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var ContainButton = styled(Button)(_templateObject());
function ContainedButton(props) {
  return /*#__PURE__*/React.createElement(ContainButton, _extends({
    variant: "contained"
  }, props), props.children);
}

module.exports = ContainedButton;
