"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _laptop = _interopRequireDefault(require("../assets/laptop.png"));
var _ProjectShowcase = require("./styles/ProjectShowcase.styles");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const ProjectShowcase = _ref => {
  let {
    projectTitle,
    projectDescription,
    buttonText,
    buttonLink,
    screenContent // New prop for the content over the laptop screen
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_ProjectShowcase.ShowcaseContainer, null, /*#__PURE__*/_react.default.createElement(_ProjectShowcase.ImageContainer, null, /*#__PURE__*/_react.default.createElement("img", {
    src: _laptop.default,
    alt: "Laptop showcasing project"
  }), /*#__PURE__*/_react.default.createElement(_ProjectShowcase.ScreenOverlay, null, screenContent, " ")), /*#__PURE__*/_react.default.createElement(_ProjectShowcase.DetailsContainer, null, /*#__PURE__*/_react.default.createElement("h3", null, projectTitle), /*#__PURE__*/_react.default.createElement("p", null, projectDescription), /*#__PURE__*/_react.default.createElement("a", {
    href: buttonLink,
    target: "_blank",
    rel: "noopener noreferrer"
  }, /*#__PURE__*/_react.default.createElement(_ProjectShowcase.CaseStudyButton, null, buttonText))));
};
var _default = exports.default = ProjectShowcase;