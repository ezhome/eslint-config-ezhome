var config = require("./base");
var utils = require("./base/utils.js");

config.rules["no-var"] = 2;
config.rules["object-shorthand"] = 2;
config.rules["prefer-const"] = 2;
config.rules["prefer-template"] = 2;

if (utils.reactPluginInstalled) {
    delete config.rules["react/display-name"];
    config.rules["react/prefer-es6-class"] = 2;
}

module.exports = config;
