const jestPresetAngularSerializers = require('jest-preset-angular/build/serializers');
const jestPresetAngularTransformers = require('jest-preset-angular/build/transformers');

const nxPreset = require('@nrwl/jest/preset');

module.exports = {
  ...nxPreset,
  transform: {
    '^.+\\.(ts|js|html)$': 'jest-preset-angular',
  },
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
      stringifyContentPathRegex: '\\.(html|svg)$',
      astTransformers: {
        before: jestPresetAngularTransformers,
      },
    },
  },
  snapshotSerializers: jestPresetAngularSerializers,
};
