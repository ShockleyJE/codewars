//https://www.codewars.com/kata/5a512f6a80eba857280000fc/solutions/javascript
function nthSmallest(arr, pos) {
  return arr.sort((a, b) => a - b)[pos - 1];
}
