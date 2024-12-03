"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _hi = require("react-icons/hi");
var _Home = require("./styles/Home.styles");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// Utility function for smooth scrolling
const scrollToSection = sectionId => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({
      behavior: "smooth"
    });
  }
};
const Home = _ref => {
  let {
    greeting,
    description,
    buttonText
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_Home.HomeContainer, {
    id: "home"
  }, /*#__PURE__*/_react.default.createElement(_Home.ContentContainer, null, /*#__PURE__*/_react.default.createElement(_Home.IntroText, null, greeting), /*#__PURE__*/_react.default.createElement(_Home.Description, null, description), /*#__PURE__*/_react.default.createElement(_Home.ButtonWrapper, null, /*#__PURE__*/_react.default.createElement(_Home.ProjectsButton, {
    onClick: () => scrollToSection("projects")
  }, buttonText, /*#__PURE__*/_react.default.createElement("span", {
    className: "arrow-icon"
  }, /*#__PURE__*/_react.default.createElement(_hi.HiArrowNarrowRight, null))))));
};
var _default = exports.default = Home;