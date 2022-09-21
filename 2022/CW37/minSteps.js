// https://www.codewars.com/kata/5a91a7c5fd8c061367000002/
function minimumSteps(numbers, value) {
  sorted = numbers.sort((a, b) => a - b);
  let [accum, steps] = [sorted[0], 0];

  while (accum < value) {
    console.log(`acc: ${accum} steps${steps}`);
    steps += 1;
    accum += sorted[steps];
  }
  return steps;
}

//Clever 1-liner
function minimumSteps(numbers, value) {
  return numbers.sort((a, b) => a - b).filter((e, i) => (value = value - e) > 0)
    .length;
}
