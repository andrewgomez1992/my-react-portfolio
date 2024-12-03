"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _Footer = require("./styles/Footer.styles");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const Footer = _ref => {
  let {
    name,
    description,
    socialLinks,
    year
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_Footer.FooterContainer, null, /*#__PURE__*/_react.default.createElement(_Footer.FooterContent, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "footer-left"
  }, /*#__PURE__*/_react.default.createElement("h2", null, name), /*#__PURE__*/_react.default.createElement("p", null, description)), /*#__PURE__*/_react.default.createElement("div", {
    className: "footer-right"
  }, /*#__PURE__*/_react.default.createElement("h3", null, "SOCIAL"), /*#__PURE__*/_react.default.createElement(_Footer.SocialIcons, null, socialLinks.map(link => /*#__PURE__*/_react.default.createElement("a", {
    key: link.name,
    href: link.url,
    target: "_blank",
    rel: "noopener noreferrer"
  }, link.icon))))), /*#__PURE__*/_react.default.createElement(_Footer.FooterBottom, null, /*#__PURE__*/_react.default.createElement("p", null, "\xA9 Copyright ", year, ". Made by ", /*#__PURE__*/_react.default.createElement("a", {
    href: "/"
  }, name))));
};
var _default = exports.default = Footer;