module.exports = {
    "extends": "eslint:recommended",
    "parser": "babel-eslint",

    "ecmaFeatures": {
        "jsx": true,
        "modules": true
    },
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "plugins": [
        "react"
    ],

    "rules": {
        "array-bracket-spacing": [2, "never"],
        "brace-style": [2, "1tbs"],
        "camelcase": [2, {"properties": "always"}],
        "comma-spacing": [2, {"after": true, "before": false}],
        "comma-style": [2, "last"],
        "computed-property-spacing": [2, "never"],
        "dot-location": [2, "property"],
        "eol-last": 2,
        "func-style": [2, "expression"],
        "indent": [2, 4, {"SwitchCase": 1}],
        "max-len": [2, 120, 2],
        "no-class-assign": 2,
        "no-const-assign": 2,
        "no-console": 0,
        "no-else-return": 2,
        "no-empty": 2,
        "no-eq-null": 2,
        "no-multiple-empty-lines": [2, {"max": 2}],
        "no-trailing-spaces": 2,
        "no-underscore-dangle": 0,
        "no-unused-vars": 2,
        "object-curly-spacing": [2, "never"],
        "quotes": [2, "double", "avoid-escape"],
        "radix": 2,
        "react/jsx-no-undef": 2,
        "react/jsx-quotes": [2, "double", "avoid-escape"],
        "react/jsx-sort-prop-types": [2, {"ignoreCase": true}],
        "react/jsx-uses-react": 1,
        "react/jsx-uses-vars": 1,
        "react/no-did-mount-set-state": [2, "allow-in-func"],
        "react/no-did-update-set-state": [2, "allow-in-func"],
        "react/no-multi-comp": 2,
        "react/no-unknown-property": 2,
        "react/prop-types": 2,
        "react/react-in-jsx-scope": 1,
        "react/self-closing-comp": 2,
        "react/wrap-multilines": 2,
        "semi": [2, "always"],
        "space-after-keywords": 2,
        "space-before-blocks": 2,
        "space-before-function-paren": [2, "never"],
        "space-in-parens": [2, "never"],
        "spaced-comment": [2, "always"],
        "wrap-regex": 2
    }
}
