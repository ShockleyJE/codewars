// each of these arrays have 3 nested arrays of 3 strings each
const arr1 = [
  ["a", "b", "c"],
  ["d", "e", "f"],
  ["g", "h", "i"],
];

const arr2 = [
  ["a", "b", "c"],
  ["d", "e", "f"],
  ["g", "h", "i"],
];
const arr3 = [
  ["a", "B", "c"],
  ["d", "E", "f"],
  ["g", "H", "i"],
];
const arr4 = [
  ["a", "b", "c"],
  ["g", "h", "i"],
  ["d", "e", "f"],
];

// if we were to use our function to compare all the possible pairs
// ONLY arr1 vs arr2 would return true

//P: Arrays, equal size, composed of subarrays
//R: boolean true/false

//Pseudo: I want to map the boolean results for equality, by using a set to determine whether the arrays are equal. If a single array pair is false then I return false

function checkEquality(arr1, arr2) {
  try {
    let arrayBooleanResult = arr1.map((curr, idx) =>
      curr.length == new Set([...curr, ...arr2[idx]]).size ? true : false
    );
    return arrayBooleanResult.includes(false) == false ? true : false;
  } catch (err) {
    return false;
  }
}

console.log(checkEquality(arr1, arr2)); //=> true
console.log(checkEquality(arr1, arr3)); //=> false
console.log(checkEquality(arr1, arr4)); //=> false
// etc.
