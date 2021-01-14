module.exports = {
  moduleFileExtensions: ['js', 'jsx', 'json', 'vue'],
  transform: {
    '^.+\\.(js|jsx)?$': 'babel-jest'
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.(css|less)$': 'identity-obj-proxy'
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  reporters: [
    [
      'jest-nyancat-reporter',
      {
        'suppressErrorReporter': false
      }
    ]
  ]
};