function solve(arr) {
  // isolate unique values within subarrays
  // map arr returining set for each sub array
  let pare_arr = arr.map((sa) => Array.from(new Set(sa)));

  pare_arr = pare_arr.map((sa) => sa.length);

  //reduce this down, multiplying the elements together
  let result = pare_arr.reduce((acc, curr) => acc * curr, 1);

  return result;
}
