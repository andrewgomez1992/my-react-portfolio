"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _Navbar = require("./styles/Navbar.styles");
var _scrollToSection = require("../util/scrollToSection");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const Navbar = _ref => {
  let {
    logo,
    title,
    menuItems,
    socialLinks,
    menuOpen,
    setMenuOpen
  } = _ref;
  const toggleMenu = () => setMenuOpen(!menuOpen);
  return /*#__PURE__*/_react.default.createElement(_Navbar.NavbarContainer, null, /*#__PURE__*/_react.default.createElement(_Navbar.LogoContainer, {
    href: "/"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: logo,
    alt: "logo"
  }), /*#__PURE__*/_react.default.createElement("h1", null, title)), /*#__PURE__*/_react.default.createElement(_Navbar.Menu, null, /*#__PURE__*/_react.default.createElement("ul", null, menuItems.map(item => /*#__PURE__*/_react.default.createElement("li", {
    key: item.section
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: `#${item.section}`,
    onClick: e => {
      e.preventDefault();
      (0, _scrollToSection.scrollToSection)(item.section);
    }
  }, item.name))))), /*#__PURE__*/_react.default.createElement(_Navbar.Hamburger, {
    onClick: toggleMenu
  }, menuOpen ? /*#__PURE__*/_react.default.createElement(_Navbar.CloseIcon, null) : /*#__PURE__*/_react.default.createElement(_Navbar.HamburgerIcon, null)), /*#__PURE__*/_react.default.createElement(_Navbar.MobileMenu, {
    $isOpen: menuOpen
  }, menuItems.map(item => /*#__PURE__*/_react.default.createElement("li", {
    key: item.section,
    onClick: toggleMenu
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: `#${item.section}`,
    onClick: e => {
      e.preventDefault();
      (0, _scrollToSection.scrollToSection)(item.section);
    }
  }, item.name)))), /*#__PURE__*/_react.default.createElement(_Navbar.SocialIcons, null, /*#__PURE__*/_react.default.createElement("ul", null, socialLinks.map(link => /*#__PURE__*/_react.default.createElement("li", {
    key: link.name
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: link.url,
    target: "_blank",
    rel: "noopener noreferrer"
  }, link.name, " ", link.icon))))));
};
var _default = exports.default = Navbar;