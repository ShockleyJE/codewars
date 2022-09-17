//https://www.codewars.com/kata/5a651865fd56cb55760000e0
//See .jpg for whiteboard
function arrayLeaders(arr) {
  function isLeader(subarray, element) {
    let sum = subarray.reduce((acc, ele) => ele + acc, 0);
    return element > sum;
  }

  let leaders = arr.filter((ele, index) => isLeader(arr.slice(index + 1), ele));

  return leaders;
}
