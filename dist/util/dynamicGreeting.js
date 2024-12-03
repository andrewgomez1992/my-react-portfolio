"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const DynamicGreeting = () => {
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone; // Get user's time zone
  const now = new Date().toLocaleString("en-US", {
    timeZone
  }); // Get the current time in the user's time zone
  const hours = new Date(now).getHours();
  const greeting = hours < 12 ? "Good Morning" : hours < 18 ? "Good Afternoon" : "Good Evening";
  return /*#__PURE__*/React.createElement("h1", null, greeting, ", I'm Drew Gomez");
};
var _default = exports.default = DynamicGreeting;