const echo = require('./echo');

test("should return the same message", () => {
  expect(echo("hello")).toBe("hello");
});
