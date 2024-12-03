"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _Contact = require("./styles/Contact.styles");
var _About = require("./styles/About.styles");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const Contact = _ref => {
  let {
    title,
    description,
    formAction,
    buttonText
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_Contact.ContactContainer, {
    id: "contact"
  }, /*#__PURE__*/_react.default.createElement(_About.HeaderContainer, null, /*#__PURE__*/_react.default.createElement(_About.Title, null, /*#__PURE__*/_react.default.createElement("p", null, title)), /*#__PURE__*/_react.default.createElement("div", null, description)), /*#__PURE__*/_react.default.createElement(_Contact.Form, {
    method: "POST",
    action: formAction
  }, /*#__PURE__*/_react.default.createElement(_Contact.Input, {
    type: "text",
    placeholder: "Name",
    name: "name",
    autoComplete: "name",
    required: true
  }), /*#__PURE__*/_react.default.createElement(_Contact.Input, {
    type: "email",
    placeholder: "Email",
    name: "email",
    autoComplete: "email",
    required: true
  }), /*#__PURE__*/_react.default.createElement(_Contact.TextArea, {
    placeholder: "Message",
    name: "message",
    rows: "10",
    autoComplete: "off",
    required: true
  }), /*#__PURE__*/_react.default.createElement(_Contact.SubmitButton, null, buttonText)));
};
var _default = exports.default = Contact;