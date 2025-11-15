const chunk = require('./chunk');

test("chunk: divides array into chunks", () => {
  expect(chunk([1,2,3,4,5], 2)).toEqual([[1,2],[3,4],[5]]);
});
