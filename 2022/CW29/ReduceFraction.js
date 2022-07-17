// https://www.codewars.com/kata/576400f2f716ca816d001614

/*
input:   [numerator, denominator]
output:  [reduced numerator, reduced denominator]
example: [45, 120] --> [3, 8]
*/

function reduce(fraction) {
  // find the smaller of the two numbers, call it smaller
  // find bigger of two numbers, call it bigger
  let bigger, smaller;
  if (fraction[0] > fraction[1]) {
    bigger = fraction[0];
    smaller = fraction[1];
  } else {
    bigger = fraction[1];
    smaller = fraction[0];
  }
  console.log(`Bigger: ${bigger}, smaller ${smaller}`);
  // for loop, start @2, iter by 1, while less than smaller
  for (let i = 2; i <= smaller; i++) {
    console.log(`${i}`);
    // mod smaller by i, if result ===0
    // true, then check the bigger number
    if (smaller % i === 0) {
      console.log(`Success on smaller: ${smaller}`);
      // mod bigger by i, if result ===0
      // if true
      // divide both values by i
      // return the result of calling reduce again
      if (bigger % i === 0) {
        console.log(`mod ${i} is zero for both values`);
        return reduce(fraction.map((x) => x / i));
      }
      //do nothing and keep going
    }
    // do nothing and keep going
  }
  //return the fraction
  return fraction;
}

console.log(reduce([15, 5]));
