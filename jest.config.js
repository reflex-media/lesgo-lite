module.exports = {
  verbose: true,
  testMatch: [
    '**/tests/*.spec.ts',
    '**/tests/**/*.spec.ts',
    '**/tests/**/*.spec.js',
  ],
  collectCoverageFrom: [
    'src/**/*.ts',
    '!src/config/*.ts',
    '!src/handlers/**/*.ts',
  ],
  coverageReporters: ['html', 'text', 'lcov'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  setupFiles: ['./tests/setupTest.ts'],
  moduleNameMapper: {
    '^Config(.*)$': '<rootDir>/src/config$1',
    '^Core(.*)$': '<rootDir>/src/core$1',
    '^Exceptions(.*)$': [
      '<rootDir>/src/exceptions$1',
      '<rootDir>/node_modules/lesgo/src/exceptions$1',
    ],
    '^Middlewares(.*)$': '<rootDir>/src/middlewares$1',
    '^Models(.*)$': '<rootDir>/src/models$1',
    '^Services(.*)$': [
      '<rootDir>/tests/__mocks__/services$1',
      '<rootDir>/src/services$1',
      '<rootDir>/node_modules/lesgo/src/services$1',
    ],
    '^Utils(.*)$': [
      '<rootDir>/tests/__mocks__/utils$1',
      '<rootDir>/src/utils$1',
      '<rootDir>/node_modules/lesgo/src/utils$1',
    ],
  },
  transformIgnorePatterns: ['/node_modules/(?!lesgo).+\\.js$'],
  reporters: [
    'default',
    [
      './node_modules/jest-html-reporter',
      {
        pageTitle: 'Soda API Test Report',
        outputPath: 'coverage/test-report/index.html',
      },
    ],
  ],
};
