// Kyu 7
// https://www.codewars.com/kata/590e03aef55cab099a0002e8

//Given an input of an array of digits, return the array with each digit incremented by its position in the array: the first digit will be incremented by 1, the second digit by 2, etc. Make sure to start counting your positions from 1 ( and not 0 ).

// Parameters, Returns, Expected, Psueodocode

//Inputs: array of digits
//Outputs: array of digits incremented by their index positions
function incrementer(nums) {
  // use Array.map() to apply a function which will increment each number by its index and 1, while only providing the final digit
  return nums.map((val, index) => (val + index + 1) % 10);
}

console.log(incrementer([4, 6, 7, 1, 3]));
