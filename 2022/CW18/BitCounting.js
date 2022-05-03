//Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.
//
//Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case


var countBits = function(n) {
    return n.toString(2).split('').reduce((previousValue, currentValue) => 
        { 
            return previousValue += Number.parseInt(currentValue)
        }, 0)
  };


// Solution 1: Split on 0
countBits = n => n.toString(2).split('0').join('').length;

// Solution 2: split and filter for 1's, returning the length
const countBits = n => n.toString(2)
                        .split('')
                        .filter(ele => ele == 1)
                        .length