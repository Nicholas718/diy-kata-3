const numberToReversedDigits = (number) => {
  return number
    .toString()
    .split("")
    .reverse()
    .map((string) => parseInt(string));
};

module.exports = numberToReversedDigits;
