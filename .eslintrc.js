module.exports = {
    root: true,
    env: {
        node: true,
        jest: true
    },
    extends: ['plugin:vue/essential', 'eslint:recommended'],
    parserOptions: {
        parser: 'babel-eslint'
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        indent: ['warn', 4],
        'no-tabs': 'off',
        'max-len': ['warn', { code: 144, ignoreStrings: true }],
        'no-alert': 'off',
        'object-property-newline': 'off',
        'no-mixed-spaces-and-tabs': 'off',
        'require-jsdoc': 'off',
        'new-cap': 'off',
        'no-invalid-this': 'off',
        'brace-style': 'off',
        camelcase: 'warn',
        'object-curly-spacing': 'off',
        quotes: ['error', 'single'],
        'vue/comment-directive': 'off'
    }
};
