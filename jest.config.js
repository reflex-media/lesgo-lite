module.exports = {
  verbose: true,
  testMatch: ['**/tests/*.spec.js', '**/tests/**/*.spec.js'],
  collectCoverageFrom: [
    'src/**/*.js',
    '!src/config.js',
    '!src/handlers/**/*.js',
  ],
  coverageReporters: ['html', 'text', 'lcov'],
  setupFiles: ['./tests/setupTest.js'],
  moduleNameMapper: {
    '^Config(.*)$': '<rootDir>/src/config$1',
    '^Core(.*)$': '<rootDir>/src/core$1',
    '^Exceptions(.*)$': '<rootDir>/src/exceptions$1',
    '^Models(.*)$': '<rootDir>/src/models$1',
    '^Services(.*)$': [
      '<rootDir>/src/services$1',
      '<rootDir>/node_modules/lesgo/src/services$1',
    ],
    '^Utils(.*)$': [
      '<rootDir>/src/utils$1',
      '<rootDir>/node_modules/lesgo/src/utils$1',
    ],
  },
  transformIgnorePatterns: ['/node_modules/(?!lesgo).+\\.js$'],
};
