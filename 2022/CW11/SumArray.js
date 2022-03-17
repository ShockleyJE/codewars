// --------------------------------------------------------------------------------- //
// Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.
// Examples

// Input: [1, 5.2, 4, 0, -1]
// Output: 9.2

// Input: []
// Output: 0

// Input: [-2.398]
// Output: -2.398
// Assumptions

//     You can assume that you are only given numbers.
//     You cannot assume the size of the array.
//     You can assume that you do get an array and if the array is empty, return 0.

// --------------------------------------------------------------------------------- //

// Solution 1: Iteration

// Takes an array of numbers and returns the sum of the numbers. 
// CASE: array does not contain any numbers, returns 0.
function sum(numbers){
    // check edge case, array is empty return 0 
    let total = 0;
    if (numbers.length === 0){
        return total;
    } else {
        // in a non-empty array, iterate & sum the total 
        for(let i = 0; i < numbers.length; i++){
            total += numbers[i]
        }
        return total;
    }
}

// Improved solution: Array.reduce()

// reduce takes a supplied reducer callback function, in this case we use a simple addition
// the return value of the function is passed along as 'a'
// we provide 0 as the initial value for the reduction

function sum(numbers) {
    return numbers.reduce((a, b) => a + b, 0);
  }
