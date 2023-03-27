// const path = require('path');

module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    env: {
        "browser": true,
        "es2021": true
    },
    extends: [
        // "eslint:recommended",
        'plugin:@typescript-eslint/recommended'
    ],
    // overrides: [
    // ],
    parserOptions: {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    // "rules": {
    // }
}
