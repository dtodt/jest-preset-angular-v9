const jestPresetAngularSerializers = require('jest-preset-angular/build/serializers');
const jestPresetAngularTransformers = require('jest-preset-angular/build/transformers');

module.exports = {
  testMatch: ['**/+(*.)+(spec|test).+(ts|js)?(x)'],
  transform: {
    '^.+\\.(ts|js|html)$': 'jest-preset-angular'
  },
  resolver: '@nrwl/jest/plugins/resolver',
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageReporters: ['html'],
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
      stringifyContentPathRegex: '\\.(html|svg)$',
      astTransformers: {
        before: jestPresetAngularTransformers
      }
    }
  },
  snapshotSerializers: jestPresetAngularSerializers,
};
