const sum = require('./sum');
test('adds 1 + 2 debe ser 3', () => {
  expect(sum(1, 2)).toBe(3);
});

const rest = require('./rest');
test('resta 5 - 2 debe ser 3', () => {
  expect(rest(5, 2)).toBe(3);
});

