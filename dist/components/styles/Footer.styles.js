"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SocialIcons = exports.FooterContent = exports.FooterContainer = exports.FooterBottom = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const FooterContainer = exports.FooterContainer = _styledComponents.default.footer`
  background-color: #000;
  color: #fff;
  padding: 40px 0;
  text-align: left;
  position: relative;
`;
const FooterContent = exports.FooterContent = _styledComponents.default.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0 20px;
  max-width: 1200px;
  margin: 0 auto;

  .footer-left {
    max-width: 500px;
  }

  .footer-left h2 {
    font-size: 1.5rem;
    font-weight: 700;
  }

  .footer-left p {
    font-size: 0.8rem;
    color: #fff;
    line-height: 1.5;
    margin-top: 10px;
  }

  .footer-right h3 {
    font-size: 1.2rem;
    margin-bottom: 10px;
    font-weight: 600;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    .footer-left,
    .footer-right {
      max-width: 100%;
      margin-bottom: 30px;
    }
  }
`;
const SocialIcons = exports.SocialIcons = _styledComponents.default.div`
  display: flex;
  gap: 15px;

  a {
    color: #fff;
    transition: color 0.3s ease;

    &:hover {
      color: #0a7969;
    }
  }

  @media (max-width: 768px) {
    justify-content: center;
  }
`;
const FooterBottom = exports.FooterBottom = _styledComponents.default.div`
  text-align: center;
  padding-top: 20px;
  color: #aaa;

  p {
    font-size: 0.9rem;
  }

  a {
    color: #0a7969;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;