const jestPresetAngularSerializers = require('jest-preset-angular/build/serializers');
const jestPresetAngularTransformers = require('jest-preset-angular/build/transformers');

module.exports = {
  name: 'prj',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/prj',
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
