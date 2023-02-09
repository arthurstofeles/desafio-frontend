module.exports = {
    preset: '@vue/cli-plugin-unit-jest',
    transformIgnorePatterns: ['/node_modules/(?!epic-spinners)'],
    moduleNameMapper: {
        '\\.(s?css|less)$': 'identity-obj-proxy'
    },
    setupFiles: ['./tests/setup.js']
}
