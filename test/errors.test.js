const testPlugin = require('./testPlugin');

describe('__() errors', () => {
  test('throwing error for missing value', () => {
    const code = '__("missing")';
    const translations = {};
    expect(() => testPlugin(code, translations)).toThrowError(/missing/);
  });

  test('tells what part is missing', () => {
    const code = '__("exists.missing.more")';
    const translations = { exists: { foo: 'bar' } };
    expect(() => testPlugin(code, translations)).toThrowError(/'missing'/);
  });

  test('does not allow objects to come through', () => {
    const code = '__("this_should_be_string")';
    const translations = { this_should_be_string: { but: 'it is not' } };
    expect(() => testPlugin(code, translations)).toThrowError(/incorrect type.*'object'/);
  });

  test('does not allow arrays to come through', () => {
    const code = '__("this_should_be_string")';
    const translations = { this_should_be_string: ['but it is an array'] };
    expect(() => testPlugin(code, translations)).toThrowError(/incorrect type/);
  });

  test('does not allow functions to come through', () => {
    const code = '__("this_should_be_string")';
    const translations = { this_should_be_string: () => 'but it is a function' };
    expect(() => testPlugin(code, translations)).toThrowError(/incorrect type.*'function'/);
  });
});
