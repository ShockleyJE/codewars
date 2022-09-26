//https://www.codewars.com/kata/5ac6932b2f317b96980000ca

function minValue(values) {
  //remove duplicates
  let uniqueNumbers = [...new Set(values)];
  let sortedUniqueNumbers = uniqueNumbers.sort((a, b) => a - b);
  let joinedSortedUnique = sortedUniqueNumbers.join("");
  let min = Number(joinedSortedUnique); // parseInt also acceptable
  console.log(
    `${min}, ${joinedSortedUnique}, ${sortedUniqueNumbers}, ${uniqueNumbers}, ${values}`
  );
  return min;
}

console.log(minValue([1, 3, 1]));
