"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _About = require("./styles/About.styles");
var _Home = require("./styles/Home.styles");
var _hi = require("react-icons/hi");
var _scrollToSection = require("../util/scrollToSection");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const About = _ref => {
  let {
    aboutHeader,
    aboutDescription,
    intro,
    skills
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_About.AboutContainer, {
    id: "about"
  }, /*#__PURE__*/_react.default.createElement(_About.InnerContainer, null, /*#__PURE__*/_react.default.createElement(_About.HeaderContainer, null, /*#__PURE__*/_react.default.createElement(_About.Title, null, /*#__PURE__*/_react.default.createElement("p", null, aboutHeader)), /*#__PURE__*/_react.default.createElement("div", null, aboutDescription)), /*#__PURE__*/_react.default.createElement(_About.ContentGrid, null, /*#__PURE__*/_react.default.createElement(_About.IntroText, null, /*#__PURE__*/_react.default.createElement("h2", null, intro.title), intro.paragraphs.map((paragraph, index) => /*#__PURE__*/_react.default.createElement("p", {
    key: index
  }, paragraph)), /*#__PURE__*/_react.default.createElement(_Home.ProjectsButton, {
    onClick: e => {
      e.preventDefault();
      (0, _scrollToSection.scrollToSection)("contact");
    }
  }, "CONTACT", /*#__PURE__*/_react.default.createElement("span", {
    className: "arrow-icon"
  }, /*#__PURE__*/_react.default.createElement(_hi.HiArrowNarrowRight, null)))), /*#__PURE__*/_react.default.createElement(_About.SkillsContainer, null, /*#__PURE__*/_react.default.createElement("h3", null, skills.title), /*#__PURE__*/_react.default.createElement(_About.SkillsList, null, skills.list.map((skill, index) => /*#__PURE__*/_react.default.createElement("span", {
    key: index
  }, skill)))))));
};
var _default = exports.default = About;