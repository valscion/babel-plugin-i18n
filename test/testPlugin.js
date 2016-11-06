const transform = require('babel-core').transform;

module.exports = function testPlugin(code) {
  const result = transform(code, {
    plugins: [['./index.js', {
      translationLoader: './test/exampleTranslationLoader',
    }]],
    babelrc: false,
  });

  return result.code;
};
