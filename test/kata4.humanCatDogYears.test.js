const { humanCatDogYears } = require("../src");

describe("calculateYears", () => {
  test("Check if human age has been converted", () => {
    expect(humanCatDogYears(10)).toEqual(10, 56, 64);
    expect(humanCatDogYears(20)).toEqual(20, 96, 114);
  });
});
