module.exports = {
  name: 'products-home-screen',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/products/home-screen',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
