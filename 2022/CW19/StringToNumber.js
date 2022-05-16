// Kyu 8, just returned from a 3-day backpacking trip and need a quick win before sleep

//Convert a String to a Number!

//Note: This kata is inspired by Convert a Number to a String!. Try that one too.
//Description
//
//We need a function that can transform a string into a number. What ways of achieving this do you know?
//
//Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

//Input: Valid integral number represented as a string
//Output: Number representation of input
const stringToNumber = function(str){
    // parse a valid integral as represented as a string
    return Number.parseInt(str);
  }


//Solution 1: I didn't know you could also use the Number constructor with a string. Neat!
var stringToNumber = function(str){
// put your code here
return Number(str);
}