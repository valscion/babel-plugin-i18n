const { join, basename } = require('path');
const { readdirSync, readFileSync } = require('fs');

const testPlugin = require('./testPlugin');

const FIXTURE_PATH = join(__dirname, 'fixtures');

const testFiles = readdirSync(FIXTURE_PATH).filter(file => (
  file.match(/\.js$/)
));

const testNames = testFiles.map(file => basename(file, '.js'));

testNames.forEach((name) => {
  test(name, () => {
    const source = readFileSync(join(FIXTURE_PATH, `${name}.js`), 'utf8');
    const result = testPlugin(source);
    expect(result).toMatchSnapshot();
  });
});
