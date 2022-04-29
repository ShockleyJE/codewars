// Kyu 7

//Wikipedia: The Baum–Sweet sequence is an infinite automatic sequence of 0s and 1s defined by the rule:
//
//bn = 1 if the binary representation of n contains no block of consecutive 0s of odd length;
//bn = 0 otherwise;
//
//for n ≥ 0.
//
//Define a generator function baumSweet that sequentially generates the values of this sequence.
//
//It will be tested for up to 1 000 000 values.
//
//Note that the binary representation of 0 used here is not 0 but the empty string ( which does not contain any blocks of consecutive 0s ).


// I must have missed the point of the function becuase I created a 0,1 alternator. 
// However, it was my first generator and it is a neat concept
function* baumSweet() {
    counter = 1
    while(true){
        yield counter;
        counter ? counter = 0 : counter = 1;
    }
  }

// Solution 1: Add a number of either 1's or 00 (even length 0's)
function* baumSweet() {
    yield 1;
    for (let i = 1; ; i++)
      yield +/^(1|00)+$/.test(i.toString(2));
  }