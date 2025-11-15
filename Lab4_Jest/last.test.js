const last = require('./last');

test("last: returns the last element when n is null", () => {
  expect(last([1, 2, 3])).toBe(3);
});

test("last: returns last n elements", () => {
  expect(last([1, 2, 3, 4], 2)).toEqual([3, 4]);
});
