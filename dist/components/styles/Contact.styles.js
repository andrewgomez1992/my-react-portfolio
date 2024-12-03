"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextArea = exports.SubmitButton = exports.Input = exports.Form = exports.ContactContainer = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _diamonds = _interopRequireDefault(require("../../assets/diamonds.webp"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const ContactContainer = exports.ContactContainer = _styledComponents.default.div`
  width: 100%;
  height: 100vh;
  background-color: #fafafa;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4px;
  scroll-margin-top: 40px;
  position: relative;

  @media (max-width: 768px) {
    scroll-margin-top: 60px;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(${_diamonds.default}) no-repeat center center;
    background-size: cover;
    opacity: 0.2;
    z-index: 0;
    pointer-events: none;
  }

  z-index: 1;
`;
const Form = exports.Form = _styledComponents.default.form`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  width: 100%;
  border-radius: 4px;
  margin-top: 20px;
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
  padding: 30px;
  background-color: #fff;
  position: relative;
  z-index: 1;
`;
const Input = exports.Input = _styledComponents.default.input`
  background-color: #f0f0f0;
  padding: 10px;
  border-radius: 4px;
  margin-top: 10px;
  margin-bottom: 10px;
  border: 1px solid #dcdcdc;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #0a7969;
    box-shadow: 0 0 3px rgba(10, 121, 105, 0.5);
  }
`;
const TextArea = exports.TextArea = _styledComponents.default.textarea`
  background-color: #f0f0f0;
  padding: 10px;
  border-radius: 4px;
  margin-top: 10px;
  margin-bottom: 10px;
  border: 1px solid #dcdcdc;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #0a7969;
    box-shadow: 0 0 3px rgba(10, 121, 105, 0.5);
  }
`;
const SubmitButton = exports.SubmitButton = _styledComponents.default.button`
  color: #fff;
  font-weight: 600;
  padding: 10px;
  width: 160px;
  margin: 40px auto 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  cursor: pointer;
  background-color: #0a7969;
  border: 2px solid transparent;

  &:hover {
    background-color: #097969;
    border-color: #097969;
  }
`;