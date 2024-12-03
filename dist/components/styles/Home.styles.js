"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProjectsButton = exports.IntroText = exports.HomeContainer = exports.Description = exports.ContentContainer = exports.ButtonWrapper = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _diamonds = _interopRequireDefault(require("../../assets/diamonds.webp"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const HomeContainer = exports.HomeContainer = _styledComponents.default.div`
  width: 100%;
  height: 100vh;
  background-color: #f2f2f2; // theme needed
  position: relative;

  @media (max-width: 576px) {
    height: 90vh;
  }

  // Adding a background image with reduced opacity using ::before pseudo-element
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(${_diamonds.default}) no-repeat center center;
    background-size: cover;
    opacity: 0.2; // Set the opacity of the image only
    z-index: 0; // Keep it behind the content
    pointer-events: none; // Ensure the background doesn't interfere with content interaction
  }

  // Ensure child content appears above the background
  z-index: 1;
`;
const ContentContainer = exports.ContentContainer = _styledComponents.default.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  position: relative; // Ensures it's above the background
  z-index: 1; // Ensures content is visible above the background image
`;
const IntroText = exports.IntroText = _styledComponents.default.div`
  font-family: "Lato", sans-serif;
  font-weight: 900;
  font-style: normal;
  font-size: 3rem;
  /* text-transform: uppercase; */
  letter-spacing: 3px;
  text-align: center;

  /* Make the font size smaller as the screen width decreases */
  @media (max-width: 1200px) {
    font-size: 3.5rem;
  }

  @media (max-width: 992px) {
    font-size: 3.5rem;
  }

  @media (max-width: 768px) {
    font-size: 3rem;
  }

  @media (max-width: 576px) {
    font-size: 2.3rem;
  }

  @media (max-width: 400px) {
    font-size: 1.5;
  }
`;
const Description = exports.Description = _styledComponents.default.p`
  font-family: "Lato", sans-serif;
  font-size: 1rem;
  /* letter-spacing: 3px; */
  line-height: 2rem;
  padding-top: 1.5rem;
  padding-bottom: 1rem;
  max-width: 600px;
  text-align: center;
  margin: 0 auto;
`;
const ButtonWrapper = exports.ButtonWrapper = _styledComponents.default.div`
  display: flex;
  justify-content: center;
`;
const ProjectsButton = exports.ProjectsButton = _styledComponents.default.a`
  color: #fff;
  font-weight: bold;
  /* border: 2px solid #29ab87; */
  height: 48px;
  width: 220px;
  margin-top: 1.5rem;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease;
  background-color: #097969; // theme needed
  letter-spacing: 1px;

  &:hover {
    /* background-color: #29ab87; */
    color: #fff;
    cursor: pointer;
    /* border-color: #29ab87; */
    transform: translateY(-3px); /* Moves the button up by 3px */
    transition: transform 0.3s ease; /* Smooth transition */
  }

  .arrow-icon {
    margin-left: 0px;
    position: relative;
    left: 12px;
    transition: transform 0.3s ease;
  }

  &:hover .arrow-icon {
    transform: rotate(90deg);
  }
`;