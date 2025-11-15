const { moyenne } = require('./notation');

test("moyenne is correctly calculated", () => {
  expect(moyenne([10, 20, 30])).toBe(20);
});
