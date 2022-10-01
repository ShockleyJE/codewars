function maxTriSum(numbers) {
  sorted = numbers.sort((a, b) => a - b);
  let removeDupes = sorted.filter((curr, idx, arr) =>
    console.log(arr.splice(idx, 1))
  );
  console.log(removeDupes);
  let reduced = removeDupes.reduce((acc, curr, idx) => acc + curr, 0);
  console.log(reduced);
  return reduced;
}

maxTriSum([3, 2, 6, 8, 2, 3]);

// Solution 1: Using a sorted set

const maxTriSum = (numbers) => {
  const [a, b, c, ...rest] = [...new Set([...numbers])].sort((a, b) => b - a);
  return a + b + c;
};
