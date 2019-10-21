module.exports = {
  name: 'privacy',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/privacy',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
