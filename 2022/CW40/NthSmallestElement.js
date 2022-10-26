//https://www.codewars.com/kata/5a512f6a80eba857280000fc/javascript
// not most optimal solution but simple
function nthSmallest(arr, pos) {
  //your code here
  return arr.sort((a, b) => a - b)[pos - 1];
}
