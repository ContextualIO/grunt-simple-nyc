import { defineConfig } from "eslint/config";
import globals from "globals";

export default defineConfig([{
    languageOptions: {
        globals: {
            ...globals.node,
            ...globals.mocha,
        },
    },

    rules: {
        strict: "off",

        quotes: ["error", "single", {
            avoidEscape: true,
            allowTemplateLiterals: true,
        }],

        "no-undef": "error",

        "no-unused-vars": ["error", {
            args: "none",
        }],

        "no-trailing-spaces": "error",
        "no-loop-func": "error",
        "no-underscore-dangle": "off",

        indent: ["error", 2, {
            SwitchCase: 1,
        }],

        "no-octal": "off",

        "no-multiple-empty-lines": ["error", {
            max: 1,
        }],

        "no-debugger": "error",

        "no-empty": ["error", {
            allowEmptyCatch: true,
        }],

        "no-template-curly-in-string": "warn",
        "no-unreachable": "error",
        "valid-typeof": "error",

        "dot-notation": ["error", {
            allowKeywords: false,
        }],

        eqeqeq: "error",
        "no-extend-native": "error",

        "no-magic-numbers": ["error", {
            ignore: [0, 1],
            ignoreArrayIndexes: true,
            enforceConst: true,
            detectObjects: true,
        }],

        "no-multi-spaces": "error",
        "no-sequences": "error",
        "wrap-iife": ["error", "inside"],
        yoda: ["error", "never"],
        "no-path-concat": "error",

        "array-bracket-spacing": ["error", "always", {
            singleValue: false,
            objectsInArrays: false,
            arraysInArrays: false,
        }],

        "brace-style": ["error", "1tbs"],

        camelcase: ["error", {
            properties: "always",
        }],

        "comma-spacing": ["error", {
            before: false,
            after: true,
        }],

        "comma-style": ["error", "last"],
        "consistent-this": ["error", "self"],

        "func-style": ["error", "expression", {
            allowArrowFunctions: true,
        }],

        "key-spacing": ["error", {
            beforeColon: false,
            afterColon: true,
            mode: "strict",
        }],

        "keyword-spacing": ["error", {
            before: true,
            after: true,
        }],

        "no-lonely-if": "error",
        "no-tabs": "error",
        "no-whitespace-before-property": "error",

        "object-curly-newline": ["error", {
            minProperties: 2,
        }],

        "object-curly-spacing": ["error", "always", {
            arraysInObjects: false,
            objectsInObjects: false,
        }],

        "object-property-newline": "error",

        semi: ["error", "always", {
            omitLastInOneLineBlock: true,
        }],

        "space-before-blocks": ["error", "always"],
        "spaced-comment": ["error", "always"],

        "arrow-spacing": ["error", {
            before: true,
            after: true,
        }],

        "no-const-assign": "error",
        "prefer-template": "error",
    },
}]);