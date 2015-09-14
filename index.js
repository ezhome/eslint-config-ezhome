var config = require("./base");

config.rules = Object.assign(config.rules, {
    "no-var": 2,
    "object-shorthand": 2,
    "prefer-const": 2,
    "prefer-template": 2,
});

module.exports = config;
