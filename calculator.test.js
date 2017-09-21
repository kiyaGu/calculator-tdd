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
test('Support different delimiters',()=>{
  expect(calculator.add("//~\n1~2")).toBe(3);
})
test('passing a negative number will throw an exception',()=>{
  expect(calculator.add("1,4,-1")).toBe("negatives not allowed: -1");
});
test('shows all of the negative numbers in the exception message',()=>{
  expect(calculator.add("1,4,-1,-2,-3")).toBe("negatives not allowed: -1,-2,-3");
});
test('ignores numbers greater than 1000',()=>{
  expect(calculator.add("2,1000")).toBe(2);
});