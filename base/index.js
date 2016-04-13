var objectAssign = require("object-assign");
var utils = require("./utils");

var config = {
    extends: ["eslint:recommended"],
    parser: "babel-eslint",

    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        sourceType: "module"
    },

    plugins: [],

    env: {
        "browser": true,
        "es6": true,
        "node": true
    },

    rules: {
        "array-bracket-spacing": [2, "never"],
        "array-callback-return": 2,
        "brace-style": [2, "1tbs"],
        "camelcase": [2, {"properties": "always"}],
        "comma-spacing": [2, {"after": true, "before": false}],
        "comma-style": [2, "last"],
        "computed-property-spacing": [2, "never"],
        "dot-location": [2, "property"],
        "eol-last": 2,
        "func-style": [2, "expression"],
        "indent": [2, 4, {"SwitchCase": 1}],
        "jsx-quotes": [2, "prefer-double"],
        "keyword-spacing": 2,
        "max-len": [2, 120, 2],
        "max-statements-per-line": [2, {"max": 1}],
        "newline-per-chained-call": [2, {"ignoreChainWithDepth": 3}],
        "no-class-assign": 2,
        "no-confusing-arrow": [2, {"allowParens": true}],
        "no-const-assign": 2,
        "no-console": 0,
        "no-duplicate-imports": 2,
        "no-else-return": 2,
        "no-empty": 2,
        "no-empty-function": 2,
        "no-eq-null": 0,
        "no-implicit-globals": 2,
        "no-multiple-empty-lines": [2, {"max": 2}],
        "no-self-assign": 2,
        "no-trailing-spaces": 2,
        "no-underscore-dangle": 0,
        "no-unused-vars": 2,
        "no-useless-escape": 2,
        "object-curly-spacing": [2, "never"],
        "prefer-rest-params": 2,
        "quotes": [2, "double", "avoid-escape"],
        "radix": 2,
        "semi": [2, "always"],
        "space-before-blocks": 2,
        "space-before-function-paren": [2, "never"],
        "space-in-parens": [2, "never"],
        "spaced-comment": [2, "always"],
        "wrap-regex": 2
    }
};

if (utils.reactPluginInstalled) {
    config.extends.push("plugin:react/recommended");

    config.plugins.push("react");

    config.rules = objectAssign(config.rules, {
        "react/jsx-boolean-value": [2, "never"],
        "react/jsx-closing-bracket-location": [2, "after-props"],
        "react/jsx-curly-spacing": [2, "never", {"allowMultiline": false}],
        "react/jsx-equals-spacing": [2, "never"],
        "react/jsx-first-prop-new-line": [2, "multiline"],
        "react/jsx-handler-names": 2,
        "react/jsx-indent-props": [2, 4],
        "react/jsx-key": 2,
        "react/jsx-max-props-per-line": [2, {"maximum": 4}],
        "react/jsx-no-duplicate-props": 2,
        "react/jsx-no-target-blank": 2,
        "react/jsx-no-undef": 2,
        "react/jsx-pascal-case": 2,
        "react/jsx-sort-props": [2, {"ignoreCase": true}],
        "react/jsx-space-before-closing": [2, "always"],
        "react/jsx-uses-react": 1,
        "react/jsx-uses-vars": 1,
        "react/display-name": 1,
        "react/no-danger": 2,
        "react/no-did-mount-set-state": [2, "allow-in-func"],
        "react/no-did-update-set-state": [2, "allow-in-func"],
        "react/no-direct-mutation-state": 2,
        "react/no-is-mounted": 2,
        "react/no-multi-comp": 2,
        "react/no-unknown-property": 2,
        "react/prefer-es6-class": [2, "always"],
        "react/prefer-stateless-function": 2,
        "react/prop-types": 2,
        "react/react-in-jsx-scope": 1,
        "react/require-render-return": 2,
        "react/self-closing-comp": 2,
        "react/sort-comp": [2, {
            order: [
                "static-methods",
                "lifecycle",
                "/^handle.+$/",
                "everything-else",
                "rendering"
            ],
            groups: {
                lifecycle: [
                    "displayName",
                    "propTypes",
                    "contextTypes",
                    "childContextTypes",
                    "mixins",
                    "statics",
                    "defaultProps",
                    "constructor",
                    "getDefaultProps",
                    "getInitialState",
                    "state",
                    "getChildContext",
                    "componentWillMount",
                    "componentDidMount",
                    "componentWillReceiveProps",
                    "shouldComponentUpdate",
                    "componentWillUpdate",
                    "componentDidUpdate",
                    "componentWillUnmount"
                ],
                rendering: [
                    "/^render.+$/",
                    "render"
                ]
            }
        }],
        "react/sort-prop-types": [2, {"ignoreCase": true}],
        "react/wrap-multilines": 2

    });
}

module.exports = config;
