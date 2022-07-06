//https://www.codewars.com/kata/558fa34727c2d274c10000ae/train/javascript

function scrabbleScore(str) {
  arr = str.split("");
  arr = arr.filter((x) => x !== " ");
  return arr.reduce((total, curr) => (total += $dict[curr.toUpperCase()]), 0);
}
