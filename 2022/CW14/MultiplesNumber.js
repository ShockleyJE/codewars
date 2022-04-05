//In this simple exercise, you will build a program that takes a value, integer , and returns a list of its multiples up to another value, limit . If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into the function, not consisting of 0. The limit will always be higher than the base.
//
//For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.
//
//If you can, try writing it in only one line of code.


function findMultiples(integer, limit) {
    arr = []
    for( let m = 1; m * integer <= limit ; m++){
       arr.push(m * integer)
    }
    return arr;
  }

// TESTS

describe("Basic Tests",() =>{
    Test.assertSimilar(findMultiples(5, 25), [5, 10, 15, 20, 25])
    Test.assertSimilar(findMultiples(1, 2), [1, 2])
    Test.assertSimilar(findMultiples(5, 7), [5])
    Test.assertSimilar(findMultiples(4, 27), [4, 8, 12, 16, 20, 24])
    Test.assertSimilar(findMultiples(11, 54), [11, 22, 33, 44])
    });


// Solution 1: Actually my solution this time :) 

// Solution 2: One liner
function findMultiples(int,limit){
    return Array(Math.floor(limit/int)).fill(1).map((x,i)=>int*(i+1));
  }