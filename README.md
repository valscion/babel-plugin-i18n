# babel-plugin-i18n

Babel plugin to statically compile keypath denoted translation calls to literals.

Compiles these...

```js
const myString = __("my.translation.path");
const anEnum = __obj("example.countries");
const lyrics = __arr("song");
const veryComplex = __dump("complex");
```

...with this kind of translation...

```js
{
  "my": {
    "translation": {
      "path": "Hei, maailma!"
    }
  },
  "example": {
    "countries": {
      "finland": "Suomi",
      "sweden": "Ruotsi"
    }
  },
  "song": [
    "Hey!",
    "Ho!",
    "Let's go!"
  ],
  "complex": [[["multilevel array"], 123], null]
}
```

...into this:

```js
const myString = "Hei, maailma!";
const anEnum = {
  finland: "Suomi",
  sweden: "Ruotsi"
};
const lyrics = ["Hey!", "Ho!", "Let's go!"];
const complex = [[["multilevel array"], 123], null];
```

## Installation

```sh
$ npm install babel-plugin-i18n --save-dev
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "plugins": ["i18n", {
    "translationLoader": "./path/to/translationLoader"
  }]
}
```

### Via CLI

TODO: How does one actually pass options via CLI?

### Via Node API

```javascript
require("babel-core").transform("code", {
  plugins: ["i18n", {
    "translationLoader": "./path/to/translationLoader"
  }]
});
```

### Translation loader example

```js
const join = require('path').join;
const readFileSync = require('fs').readFileSync;

const TRANSLATIONS_PATH = join(__dirname, 'completeTranslations.json');

module.exports = function myTranslationLoader() {
  const translationJSON = readFileSync(TRANSLATIONS_PATH, 'utf8');
  return JSON.parse(translationJSON);
};
```
