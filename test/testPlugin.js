const { join } = require('path');
const { transform } = require('babel-core');

module.exports = function testPlugin(code) {
  const loaderPath = join(__dirname, 'exampleTranslationLoader.js');
  const result = transform(code, {
    plugins: [['./index.js', {
      translationLoader: loaderPath,
    }]],
  });

  return result.code;
};
