const evenNumbers = (array, number) =>
  array.filter((item) => item % 2 === 0).slice(-number);
