const { reverseString, stringLength } = require('./task1');

test('Return the number of character in a string', () => {
  expect(stringLength('Name')).toBe(4);
});

test('Expect the strings value to be reversed', () => {
  expect(reverseString('you')).toBe('uoy');
});
