//For this game of BINGO, you will receive a single array of 10 numbers from 1 to 26 as an input. Duplicate numbers within the array are possible.
//
//Each number corresponds to their alphabetical order letter (e.g. 1 = A. 2 = B, etc). Write a function where you will win the game if your numbers can spell "BINGO". They do not need to be in the right order in the input array). Otherwise you will lose. Your outputs should be "WIN" or "LOSE" respectively.

function bingo(a) {
    // your winning code here
    indices = [2,9,14,7,15]
    inputs = new Set(a);
    intersection = new Set(indices.filter(x => inputs.has(x)))
    if(intersection.size === indices.length){
      return 'WIN'
    } else {
      return 'LOSE'
    }
  }

  //Solution 1:  I should come back to this to understand the every method.
  const bingo = ar => [2,7,9,14,15].every(e => ar.includes(e)) ? 'WIN' : 'LOSE';