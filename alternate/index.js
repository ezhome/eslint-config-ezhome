var config = require("../");
var utils = require("../base/utils.js");

config.rules["comma-dangle"] = [2, "always-multiline"];
config.rules["indent"] = [2, 2, {"SwitchCase": 1}];

if (utils.reactPluginInstalled) {
    config.rules["react/jsx-handler-names"] = 2;
    config.rules["react/jsx-indent"] = [2, 2];
    config.rules["react/jsx-indent-props"] = [2, 2];
    config.rules["react/jsx-no-string-refs"] = 2;
}

module.exports = config;
