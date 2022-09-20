//https://www.codewars.com/kata/5a7893ef0025e9eb50000013

function maxGap(arr) {
  sorted = arr.sort((a, b) => a - b);
  diffs = [];
  for (i = 1; i < arr.length; i++) {
    one = arr[i - 1];
    two = arr[i];
    diffs.push(Math.abs(one - two));
  }
  diffs.sort((a, b) => a - b);
  return diffs[diffs.length - 1];
}

console.log(maxGap([-7, -42, -809, -14, -12]));
