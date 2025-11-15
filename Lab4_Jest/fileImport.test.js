const { sum } = require('./fileImport');

test("sum adds numbers correctly", () => {
  expect(sum(2, 3)).toBe(5);
});
