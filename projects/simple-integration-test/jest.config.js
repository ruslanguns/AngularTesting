const baseConfig = require('../../jest.config');

module.exports = {
  ...baseConfig,
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/projects/simple-integration-test/tsconfig.spec.json',
    },
  },
};
