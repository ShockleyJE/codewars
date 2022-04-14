//You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

function findOutlier(integers){
    //map the array with a modulo function to determine evenness, ensuring the 1's are positive even if the source integer is negative
    moddedIntegers = integers.map(x => Math.abs(x) % 2)
    // if moddedInteger.reduce > 1 then the array is even-based
    base = moddedIntegers.reduce((prev, curr) => prev + curr, 0)
    if (base !== 1){
      return integers[moddedIntegers.indexOf(0)]
    } else {
      return integers[moddedIntegers.indexOf(1)]
    }
  }

  //Solution 1
  //use a filter function on modulo/non-modulo to remove even/non-even values
  //ternary operation on the length to return the 0 (only) indexed element
  function findOutlier(int){
    var even = int.filter(a=>a%2==0);
    var odd = int.filter(a=>a%2!==0);
    return even.length==1? even[0] : odd[0];
  }