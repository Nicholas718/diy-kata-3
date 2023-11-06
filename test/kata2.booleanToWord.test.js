const { booleanToWord } = require("../src");

describe("booleanToWord to equal Yes instead of true", () => {
  expect(booleanToWord(true)).toEqual("Yes");
});

describe("booleanToWord to equal No instead of false", () => {
  expect(booleanToWord(false)).toEqual("No");
});
