module.exports = {
  verbose: true,
  testMatch: ['**/tests/*.spec.ts', '**/tests/**/*.spec.ts'],
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
    // This will be removed in the future versions
    '^Config(.*)$': '<rootDir>/src/config$1',
    // This will be removed in the future versions
    '^Core(.*)$': '<rootDir>/src/core$1',
    // This will be removed in the future versions
    '^Exceptions(.*)$': ['<rootDir>/src/exceptions$1'],
    '^Middlewares/errorHttpResponseMiddleware$':
      '<rootDir>/tests/__mocks__/middlewares/errorHttpResponseMiddleware.ts',
    '^Middlewares/normalizeHttpRequestMiddleware$':
      '<rootDir>/tests/__mocks__/middlewares/normalizeHttpRequestMiddleware.ts',
    '^Middlewares(.*)$': '<rootDir>/src/middlewares$1',
    // This will be removed in the future versions
    '^Models(.*)$': '<rootDir>/src/models$1',
    '^Services(.*)$': [
      '<rootDir>/tests/__mocks__/services$1',
      '<rootDir>/src/services$1',
      '<rootDir>/node_modules/lesgo/src/services$1',
    ],
    '^Types(.*)$': ['<rootDir>/src/types$1'],
    '^Utils(.*)$': [
      '<rootDir>/tests/__mocks__/utils$1',
      '<rootDir>/src/utils$1',
      '<rootDir>/node_modules/lesgo/src/utils$1',
    ],
    '^config(.*)$': '<rootDir>/src/config$1',
    '^core(.*)$': '<rootDir>/src/core$1',
    '^exceptions(.*)$': '<rootDir>/src/exceptions$1',
    '^models(.*)$': '<rootDir>/src/models$1',
    '^lesgo(.*)$': '<rootDir>/node_modules/lesgo/src$1',
  },
  transformIgnorePatterns: ['/node_modules/(?!lesgo).+\\.js$'],
  reporters: [
    'default',
    [
      './node_modules/jest-html-reporter',
      {
        pageTitle: 'Lesgo Lite Test Report',
        outputPath: 'coverage/test-report/index.html',
      },
    ],
  ],
};
