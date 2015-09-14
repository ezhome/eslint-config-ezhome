var config = require("../");

config.rules["comma-dangle"] = [2, "always-multiline"];
config.rules["indent"] = [2, 2, {"SwitchCase": 1}];
config.rules["max-len"] = [2, 79, 4];
config.rules["react/jsx-indent-props"] = [2, 2];

module.exports = config;
