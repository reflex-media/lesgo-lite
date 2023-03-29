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
