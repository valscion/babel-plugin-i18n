const { transform } = require('babel-core');

module.exports = function testPlugin(code, translations) {
  const result = transform(code, {
    plugins: [['./index.js', { translations }]],
  });

  return result.code;
};
