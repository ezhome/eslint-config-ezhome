var config = require("./base");

delete config.rules["react/display-name"];
config.rules["no-var"] = 2;
config.rules["object-shorthand"] = 2;
config.rules["prefer-const"] = 2;
config.rules["prefer-template"] = 2;
config.rules["react/prefer-es6-class"] = 2;

module.exports = config;
