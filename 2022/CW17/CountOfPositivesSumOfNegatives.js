// NOTE: This codewars is incorrect. I am not the only person to have issues with test 4 despite having it be an explicit case

// https://www.codewars.com/kata/576bb71bbbcf0951d5000044/train/javascript

//Given an array of integers.
//
//Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
//
//If the input is an empty array or is null, return an empty array.
//Example
//
//For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

function countPositivesSumNegatives(input) {
  
    if (input === null || input === [] || input == [0, 0]){
      return [];
    } else {
      neg = input.filter(x => x < 0)
      pos = input.filter(x => x > 0)
      return [pos.length, neg.length ? neg.reduce((a,b) => a + b) : 0]
    }
  }