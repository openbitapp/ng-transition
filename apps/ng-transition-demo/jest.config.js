module.exports = {
  name: 'ng-transition-demo',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/ng-transition-demo',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
