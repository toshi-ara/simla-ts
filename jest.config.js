module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    roots: ["<rootDir>/test"],
    collectCoverage: true,
    collectCoverageFrom: [
        "**/*.ts",
        "!**/node_modules/**",
    ]
};

