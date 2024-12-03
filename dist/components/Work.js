"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _Work = require("./styles/Work.styles");
var _About = require("./styles/About.styles");
var _ProjectShowcase = _interopRequireDefault(require("./ProjectShowcase"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const Work = _ref => {
  let {
    header,
    description,
    projects
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_Work.WorkContainer, {
    id: "projects"
  }, /*#__PURE__*/_react.default.createElement(_Work.WorkWrapper, null, /*#__PURE__*/_react.default.createElement(_About.HeaderContainer, null, /*#__PURE__*/_react.default.createElement(_About.Title, null, /*#__PURE__*/_react.default.createElement("p", null, header)), /*#__PURE__*/_react.default.createElement("div", null, description)), /*#__PURE__*/_react.default.createElement("div", null, projects.map((project, index) => /*#__PURE__*/_react.default.createElement(_ProjectShowcase.default, {
    key: index,
    projectTitle: project.title,
    projectDescription: project.description,
    buttonText: project.buttonText,
    buttonLink: project.buttonLink,
    screenContent: project.screenContent,
    mobileImage: project.mobileImage
  })))));
};
var _default = exports.default = Work;