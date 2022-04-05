//As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.
//
//The input to the function will be an array of three distinct numbers (Haskell: a tuple).
//
//For example:
//
//gimme([2, 3, 1]) => 0
//
//2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.
//
//Another example (just to make sure it is clear):
//
//gimme([5, 10, 14]) => 1


function gimme (triplet) {
    //create a copy of the array
    copy = triplet.slice();
    // return the index of the value at position 1 in a sorted copy of the triplet
    return triplet.indexOf(copy.sort((a,b) => a-b)[1])
  }


 // Solution 1
  function gimme(a) {
    return a.indexOf(a.concat().sort(function(a, b) { return a - b })[1])
  }

  // Solution 2
  const gimme = function (arr) {
    return arr.indexOf([...arr].sort((x, y) => x > y)[1]);
  };