//https://www.codewars.com/kata/584dc1b7766c2bb158000226
//Input: Integer array of even length, between 10 and 30
//Output: Array of integers of optimized workload (a[i]+a[n-i],a[i+1]+a[n-i+1])
function choreAssignment(chores) {
  var result = [];
  // sort the array inplace
  chores.sort((a, b) => a - b);
  // while the array property is truthy
  while (chores.length) {
    result.push(chores.pop() + chores.shift());
  }
  return result.sort((a, b) => a - b);
}

console.log(choreAssignment([5, 2, 1, 6, 4, 4]));
