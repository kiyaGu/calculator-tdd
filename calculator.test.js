const calculator = require('./calculator');

test('returns 0 for empty string', () => {
  expect(calculator.add("")).toBe(0);
});
test('returns the given number for single argument',()=>{
  expect(calculator.add("1")).toBe(1);
});
test('returns their sum for two arguments',()=>{
  expect(calculator.add("1,2")).toBe(3);
});
test('returns their sum for more than two arguments',()=>{
  expect(calculator.add("2,3,5,7,8")).toBe(25);
});
test('handle new lines between numbers',()=>{
  expect(calculator.add("1\n2,3")).toBe(6);
})
