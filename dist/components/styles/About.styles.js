"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Title = exports.SkillsList = exports.SkillsContainer = exports.IntroText = exports.InnerContainer = exports.HeaderContainer = exports.ContentGrid = exports.AboutContainer = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const AboutContainer = exports.AboutContainer = _styledComponents.default.div`
  width: 100%;
  background-color: #fafafa;
  color: #121212;
  padding: 20px;
  /* margin-top: 2rem; */
`;
const InnerContainer = exports.InnerContainer = _styledComponents.default.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 4rem;
  margin-bottom: 4rem;
`;
const HeaderContainer = exports.HeaderContainer = _styledComponents.default.div`
  max-width: 1000px;
  width: 100%;
  text-align: center;
  margin-bottom: 20px;

  div {
    font-size: 1rem;
    margin-top: 10px;
    color: #5a5a5a;
  }
`;
const Title = exports.Title = _styledComponents.default.div`
  text-align: center;
  padding-bottom: 12px;

  p {
    color: #121212;
    font-size: 2rem;
    font-weight: 700;
    display: inline-block;
    position: relative;
    padding-bottom: 8px;
    letter-spacing: 3px;

    &::after {
      content: "";
      position: absolute;
      left: 50%;
      bottom: 0;
      transform: translateX(-50%);
      width: 30%;

      height: 4px;
      background-color: #0a7969; // theme needed
      border-radius: 10px;
    }
  }
`;
const ContentGrid = exports.ContentGrid = _styledComponents.default.div`
  max-width: 1000px;
  width: 100%;
  display: grid;
  grid-template-columns: 2fr 2fr;
  gap: 30px;
  align-items: start;
  padding: 0 16px;
  margin-top: 30px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;
const IntroText = exports.IntroText = _styledComponents.default.div`
  text-align: left;

  h2 {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 15px;
  }

  p {
    font-size: 1rem;
    margin-bottom: 10px;
    color: #5a5a5a;

    span {
      font-weight: bold;
    }

    a {
      color: #a33de3;
      text-decoration: none;
    }

    a:hover {
      text-decoration: underline;
    }
  }

  button {
    margin-top: 20px; /* Add space between text and button */
    width: 160px;
  }
`;
const SkillsContainer = exports.SkillsContainer = _styledComponents.default.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h3 {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 20px;
  }

  @media (max-width: 768px) {
    /* margin-top: 30px; */
  }
`;
const SkillsList = exports.SkillsList = _styledComponents.default.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  span {
    background-color: #eaeaea;
    padding: 10px 15px;
    border-radius: 8px;
    font-weight: 500;
    color: #121212;
  }
`;