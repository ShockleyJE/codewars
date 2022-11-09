//https://www.codewars.com/kata/523f5d21c841566fde000009

function arrayDiff(a, b) {
  let bitems = [...new Set(b)];
  return a.filter((x) => !bitems.includes(x));
}
console.log(arrayDiff([1, 2], [1])); // 2
console.log(arrayDiff([1, 2, 2], [1])); //2,2
