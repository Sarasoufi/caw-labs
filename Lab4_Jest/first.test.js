const first = require('./first');

test("first: returns first element when n is null", () => {
  expect(first([1, 2, 3])).toBe(1);
});

test("first: returns first n elements", () => {
  expect(first([1, 2, 3, 4], 2)).toEqual([1, 2]);
});
