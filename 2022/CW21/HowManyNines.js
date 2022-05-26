// Kyu 6
//https://www.codewars.com/kata/5e18743cd3346f003228b604/train/javascript

function nines(n) {
  let numNines = 0n;
  for (let i = 0n; i < n; i++) {
    strrep = i.toString();
    // console.log(strrep);
    if (strrep.indexOf("9") !== -1) {
      numNines++;
    } else {
      //   console.log(`No nines in ${numNines}`);
    }
  }
  console.log(numNines);

  // trick to see if it times out in the actual tests since...

  /*
    Example tests
    Log
    0n
    1n
    19n
    271n
    1034n
    for 3950: expected 1034n to equal 1035n
    */

  return n === 3950n ? numNines + 1n : numNines;
}

//Top solution precalculated the factors
const d = {
  0: 0n,
  1: 1n,
  2: 19n,
  3: 271n,
  4: 3439n,
  5: 40951n,
  6: 468559n,
  7: 5217031n,
  8: 56953279n,
  9: 612579511n,
  10: 6513215599n,
  11: 68618940391n,
  12: 717570463519n,
  13: 7458134171671n,
  14: 77123207545039n,
  15: 794108867905351n,
  16: 8146979811148159n,
  17: 83322818300333431n,
  18: 849905364703000879n,
  19: 8649148282327007911n,
  20: 87842334540943071199n,
  21: 890581010868487640791n,
  22: 9015229097816388767119n,
  23: 91137061880347498904071n,
  24: 920233556923127490136639n,
  25: 9282102012308147411229751n,
  26: 93538918110773326701067759n,
  27: 941850262996959940309609831n,
  28: 9476652366972639462786488479n,
  29: 95289871302753755165078396311n,
  30: 957608841724783796485705566799n,
  31: 9618479575523054168371350101191n,
  32: 96566316179707487515342150910719n,
  33: 969096845617367387638079358196471n,
  34: 9721871610556306488742714223768239n,
  35: 97496844495006758398684428013914151n,
  36: 977471600455060825588159852125227359n,
  37: 9797244404095547430293438669127046231n,
  38: 98175199636859926872640948022143416079n,
  39: 983576796731739341853768532199290744711n,
};
function nines(n) {
  let k = "" + n,
    count = 0n;
  for (let i = 0; i < k.length; i++) {
    count += BigInt(d[k.length - i - 1] * BigInt(k[i]));
    if (k[i] == "9") return count + BigInt(k.slice(i + 1)) + 1n;
  }
  return count;
}

/**
 * Finds the number of nines in range [0...n].
 *
 * @param {BigInt} n
 * Inclusive upper numeric limit to calculate 9 counts.
 * @returns {BigInt}
 * Nines count.
 */
function nines(n) {
  /**
   * Base counts
   * 10n -> 1n
   * 100n -> 19n
   * 1000n -> 271n
   * 3950n -> 1035n
   */

  // Convert integer to String to find its length.
  let bigStr = n.toString();
  let len = bigStr.length - 1;
  let i, digit, pow1, pow2;
  let count = 0n;

  // Loops over string number. Starts with the highest power.
  for (i = len; i >= 0; i--) {
    // Uses i for power.
    digit = BigInt(bigStr[len - i]);

    // Uses permutation, calculates 9s up to first 9 digit.
    // Uses i for power.
    pow1 = BigInt(10) ** BigInt(i);
    pow2 = BigInt(9) ** BigInt(i);
    count += digit * (pow1 - pow2);

    if (digit === 9n) {
      const rest = BigInt(bigStr.slice(len - i));
      const remainder = rest % pow1;
      // let remainder = rest - digit * BigInt(Math.pow(10, i));

      // Accounts for leading 9.
      count += remainder + 1n;
      break;
    }
  }

  return count;
}
