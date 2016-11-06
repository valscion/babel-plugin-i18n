const transform = require('babel-core').transform;

module.exports = function testPlugin(code, fullTranslations) {
  const opts = {};
  if (fullTranslations) {
    opts.__translationsForTests = fullTranslations;
  } else {
    opts.translationLoader = './test/exampleTranslationLoader';
  }
  const result = transform(code, {
    plugins: [['./index.js', opts]],
    babelrc: false,
  });

  return result.code;
};
