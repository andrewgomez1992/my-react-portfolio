"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _Navbar = _interopRequireDefault(require("./components/Navbar"));
var _Home = _interopRequireDefault(require("./components/Home"));
var _About = _interopRequireDefault(require("./components/About"));
var _Work = _interopRequireDefault(require("./components/Work"));
var _Contact = _interopRequireDefault(require("./components/Contact"));
var _Footer = _interopRequireDefault(require("./components/Footer"));
var _fa = require("react-icons/fa");
var _hi = require("react-icons/hi");
var _bs = require("react-icons/bs");
var _greenhat = _interopRequireDefault(require("./assets/greenhat.png"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
// import your own images for screen content on top of laptop screen
// Uncomment screenContent below

// import yourfirstimage from "./assets/yourfirstimage.png";
// import yoursecondimage from "./assets/yoursecondimage.png";
// import yourthirdimage from "./assets/yourthirdimage.png";
// import yourfourthimage from "./assets/yourfourthimage.png";

function App() {
  const [menuOpen, setMenuOpen] = (0, _react.useState)(false);

  // Navbar
  const menuItems = [{
    name: "Home",
    section: "home"
  }, {
    name: "About",
    section: "about"
  }, {
    name: "Projects",
    section: "projects"
  }, {
    name: "Contact",
    section: "contact"
  }];
  const socialLinks = [{
    name: "Linkedin",
    url: "https://linkedin.com",
    icon: /*#__PURE__*/_react.default.createElement(_fa.FaLinkedin, null)
  }, {
    name: "Github",
    url: "https://github.com",
    icon: /*#__PURE__*/_react.default.createElement(_fa.FaGithub, null)
  }, {
    name: "Email",
    url: "mailto:someone@example.com",
    icon: /*#__PURE__*/_react.default.createElement(_hi.HiOutlineMail, null)
  }, {
    name: "Resume",
    url: "https://resume.com",
    icon: /*#__PURE__*/_react.default.createElement(_bs.BsFillPersonLinesFill, null)
  }];

  // About
  const aboutHeader = "ABOUT ME";
  const aboutDescription = "Below you will find more information about me, what I do, and my current skills mostly in terms of web development.";
  const intro = {
    title: "Get to know me!",
    paragraphs: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."]
  };
  const skills = {
    title: "My Skills",
    list: ["JavaScript", "React", "Redux", "Node Js", "Express", "AWS", "SQL", "HTML", "CSS", "Jest", "GIT", "Github", "Responsive Design", "Communication", "Critical Thinking", "Debugging"]
  };
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_Navbar.default, {
    logo: _greenhat.default,
    title: "Your Name Here",
    menuItems: menuItems,
    socialLinks: socialLinks,
    menuOpen: menuOpen,
    setMenuOpen: setMenuOpen
  }), /*#__PURE__*/_react.default.createElement(_Home.default, {
    greeting: "Welcome to My Portfolio!",
    description: "I specialize in building intuitive and high-performance web applications with clean, maintainable code.",
    buttonText: "Explore Projects"
  }), /*#__PURE__*/_react.default.createElement(_About.default, {
    aboutHeader: aboutHeader,
    aboutDescription: aboutDescription,
    intro: intro,
    skills: skills
  }), /*#__PURE__*/_react.default.createElement(_Work.default, {
    header: "PROJECTS",
    description: "Below you will find some of the projects I've worked on or am currently working on",
    projects: [{
      title: "Example 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      buttonText: "Coming Soon",
      buttonLink: "Your Hosted Website Link"
      // screenContent: <img src={yourfirstimage} alt="Project" />,
    }, {
      title: "Example 2",
      description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      buttonText: "Demo",
      buttonLink: "Your Hosted Website Link"
      // screenContent: <img src={yoursecondimage} alt="Project" />,
    }, {
      title: "Example 3",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      buttonText: "Demo",
      buttonLink: "Your Hosted Website Link"
      // screenContent: <img src={yourthirdimage} alt="Project" />,
    }, {
      title: "Example 4",
      description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      buttonText: "Demo",
      buttonLink: "Your Hosted Website Link"
      // screenContent: <img src={yourfourthimage} alt="Project" />,
    }]
  }), /*#__PURE__*/_react.default.createElement(_Contact.default, {
    title: "CONTACT",
    description: "Below you can leave your information and I'll get back to you right away.",
    formAction: "https://getform.io/f/your-custom-url",
    buttonText: "Send"
  }), /*#__PURE__*/_react.default.createElement(_Footer.default, {
    name: "Your name here",
    description: "A Full Stack Web Developer building and managing Websites and Web Applications that lead to the success of the overall product. Check out some of my work in the Projects section.",
    socialLinks: [{
      name: "LinkedIn",
      url: "https://linkedin.com",
      icon: /*#__PURE__*/_react.default.createElement(_fa.FaLinkedin, null)
    }, {
      name: "GitHub",
      url: "https://github.com",
      icon: /*#__PURE__*/_react.default.createElement(_fa.FaGithub, null)
    }, {
      name: "Twitter",
      url: "https://twitter.com",
      icon: /*#__PURE__*/_react.default.createElement(_fa.FaTwitter, null)
    }, {
      name: "YouTube",
      url: "https://youtube.com",
      icon: /*#__PURE__*/_react.default.createElement(_fa.FaYoutube, null)
    }, {
      name: "Portfolio",
      url: "https://portfolio.com",
      icon: /*#__PURE__*/_react.default.createElement(_bs.BsFillBriefcaseFill, null)
    }],
    year: 2024
  }));
}
var _default = exports.default = App;