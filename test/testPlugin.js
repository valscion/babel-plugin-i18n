const { transform } = require('babel-core');

module.exports = function testPlugin(code) {
  const result = transform(code, {
    plugins: [['./index.js', {
      translationLoader: './test/exampleTranslationLoader',
    }]],
  });

  return result.code;
};
