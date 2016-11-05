// const { transform } = require('babel-core');

const transform = (code) => ({ code });

module.exports = function testPlugin(code) {
  const result = transform(code, {
    plugins: ['./index.js'],
  });

  return result.code;
};
