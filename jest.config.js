const cwd = process.cwd();

module.exports = {
  verbose: false,
  silent: true,
  forceExit: true,
  testEnvironment: 'node',
  globals: {
    'ts-jest': {
      tsconfig: './tsconfig.json',
    },
  },
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testRegex: `${cwd}\/.*test\/.+\.(test|spec)\.(ts|js)$`,
};

