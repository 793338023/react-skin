const themeOne = require("./themeOne");
const themeTwo = require("./themeTwo");
const themeThree = require("./themeThree");

let theme = {
  themeOne,
  themeTwo,
  themeThree
};
process.env["REACT_APP_theme"] = Object.keys(theme).join(";");

module.exports = theme;
