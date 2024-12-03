"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SocialIcons = exports.NavbarContainer = exports.MobileMenu = exports.Menu = exports.LogoContainer = exports.HamburgerIcon = exports.Hamburger = exports.CloseIcon = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _fa = require("react-icons/fa");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const NavbarContainer = exports.NavbarContainer = _styledComponents.default.div`
  position: fixed;
  z-index: 1000;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff; /* Plain white background */
`;
const LogoContainer = exports.LogoContainer = _styledComponents.default.a`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;

  img {
    width: 200px;
    cursor: pointer;
    position: relative;
    right: 50px;
  }

  h1 {
    font-size: 1.2rem;
    font-weight: 600;
    letter-spacing: 1px;
    position: relative;
    right: 95px;

    @media (max-width: 992px) {
      display: none;
    }
  }
`;
const Menu = exports.Menu = _styledComponents.default.div`
  ul {
    display: none;
    text-transform: uppercase;
    font-size: 0.9rem;
    margin-right: 20px;

    @media (min-width: 768px) {
      display: flex;
      letter-spacing: 1px;
      font-weight: 800;

      li {
        padding: 0 30px;
        cursor: pointer;
      }

      a {
        color: #333333;
        text-decoration: none;

        &:hover {
          color: #097969;
        }
      }
    }
  }
`;
const Hamburger = exports.Hamburger = _styledComponents.default.div`
  display: block;
  z-index: 10;
  font-size: 32px; /* Increase icon size */
  cursor: pointer;
  margin-right: 20px;

  @media (min-width: 768px) {
    display: none;
  }
`;
const MobileMenu = exports.MobileMenu = _styledComponents.default.ul`
  display: ${_ref => {
  let {
    $isOpen
  } = _ref;
  return $isOpen ? "flex" : "none";
}};
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  position: absolute;
  top: 80px; /* Below the navbar */
  left: 0;
  width: 100%;
  height: 40vh;
  background-color: #ffffff; /* Plain white */
  z-index: 9;

  li {
    padding: 12px;
    border-bottom: 1px solid #f0f0f0;
    width: 100%;
    font-size: 22px;
    text-align: right;
    cursor: pointer;

    a {
      color: #333333;
      font-weight: 600;
      letter-spacing: 3px;
      text-decoration: none;

      &:hover {
        color: #0a7969;
      }
    }
  }
`;
const SocialIcons = exports.SocialIcons = _styledComponents.default.div`
  display: none;

  @media (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 35%;
    left: 0;

    ul {
      li {
        width: 160px;
        height: 60px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-left: -100px;
        padding: 0 16px;
        background-color: #ffffff;
        cursor: pointer;

        &:hover {
          margin-left: -10px;
        }

        a {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          color: #000000;
          text-decoration: none;

          svg {
            font-size: 1.8rem; /* Increase icon size here */
          }

          &:hover {
            color: #0a7969;
          }
        }
      }
    }
  }
`;
const HamburgerIcon = exports.HamburgerIcon = (0, _styledComponents.default)(_fa.FaBars)`
  color: #097969;
  font-size: 24px; /* Consistent size for icons */
`;
const CloseIcon = exports.CloseIcon = (0, _styledComponents.default)(_fa.FaTimes)`
  color: #097969;
  font-size: 24px; /* Consistent size for icons */
`;