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
    '^Constants/errorCodes(.*)$': '<rootDir>/src/constants/errorCodes$1',
    '^Core(.*)$': '<rootDir>/src/core$1',
    '^Exceptions(.*)$': '<rootDir>/src/exceptions$1',
    '^Models(.*)$': '<rootDir>/src/models$1',
    '^Utils/logger$': '<rootDir>/tests/__mocks__/utils/logger.js',
  },
  transformIgnorePatterns: ['/node_modules/(?!lesgo).+\\.js$'],
};
