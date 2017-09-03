const calculator = require('./calculator');

test('returns 0 for empty string', () => {
  expect(calculator.add("")).toBe(0);
});