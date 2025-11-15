const concatColors = require('./concat');

test("concatenates array of strings", () => {
  expect(concatColors(["Red", "Green", "White", "Black"]))
    .toBe("RedGreenWhiteBlack");
});
