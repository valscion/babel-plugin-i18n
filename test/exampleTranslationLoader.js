const { join } = require('path');
const { readFileSync } = require('fs');

const TRANSLATIONS_PATH = join(__dirname, 'fixtures', 'translations.json');

module.exports = function exampleTranslationLoader() {
  const translationJSON = readFileSync(TRANSLATIONS_PATH, 'utf8');
  return JSON.parse(translationJSON);
};
