var config = require("../");

config.rules = Object.assign(config.rules, {
    "comma-dangle": [2, "always-multiline"],
    "indent": [2, 2, {"SwitchCase": 1}],
    "max-len": [2, 79, 4],
    "react/jsx-indent-props": [2, 2]
});

module.exports = config;
