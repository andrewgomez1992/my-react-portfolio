"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ShowcaseContainer = exports.ScreenOverlay = exports.ImageContainer = exports.DetailsContainer = exports.CaseStudyButton = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const ShowcaseContainer = exports.ShowcaseContainer = _styledComponents.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 40px 0;
  max-width: 1000px;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;
const ImageContainer = exports.ImageContainer = _styledComponents.default.div`
  flex: 1;
  position: relative; /* Make this container relative so the overlay can be positioned within it */

  img {
    width: 100%;
    max-width: 500px;
  }

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;
const ScreenOverlay = exports.ScreenOverlay = _styledComponents.default.div`
  position: absolute;
  top: 17%;
  left: 15.3%;
  width: 69.2%;
  height: 67%;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    /* object-fit: cover; */
  }
`;
const DetailsContainer = exports.DetailsContainer = _styledComponents.default.div`
  flex: 1;
  padding-left: 20px;

  h3 {
    color: #333;
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 20px;
  }

  p {
    font-size: 1rem;
    color: #5a5a5a;
    margin-bottom: 20px;
  }

  @media (max-width: 768px) {
    padding-left: 0;
  }
`;
const CaseStudyButton = exports.CaseStudyButton = _styledComponents.default.button`
  background-color: #0a7969;
  color: white;
  font-size: 1rem;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0a7969;
  }
`;