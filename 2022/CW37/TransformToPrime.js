//https://www.codewars.com/kata/5a946d9fba1bb5135100007c

function minimumNumber(arr) {
  let currentSum = arr.reduce((acc, curr) => acc + curr, 0);

  let [isNotPrime, newNum] = [true, 0];

  while (isNotPrime) {
    if (isPrime(newNum + currentSum)) {
      return newNum;
    } else {
      console.log(`incrementing newnum from ${newNum}`);
      newNum++;
    }
  }

  function isPrime(number) {
    if (number === 1) {
      return false;
    }
    for (i = 2; i < number - 1; i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  }
}

console.log(minimumNumber([3, 1, 2]));
