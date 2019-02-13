module.exports = {
  collectCoverage: false,
  testURL: 'http://test.medable.com',
  moduleNameMapper: {
    '\\.(css)$': '<rootDir>/tests/__mocks__/styleMock.js'
  }
}
