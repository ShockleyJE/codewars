//https://www.codewars.com/kata/57f75cc397d62fc93d000059

//
function calc(input) {
  // Create A-Z array of characters, alphabet
  let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  // instace array of obj (dict) for alphachar, code pair
  let alphachar = {};
  // instantiate const for starting code (65)
  const START_CHAR_CODE = 65;
  // instantiate var for charcode to starting code
  let charcode = START_CHAR_CODE;
  // For each char in alphabet, assign key to char, and, starting at charcode, assign the value charcode
  alphabet.forEach((x) => {
    alphachar[x] = charcode;
    charcode += 1;
  });
  let total1 = String();
  let total2 = String();
  input.split("").forEach((x) => {
    total1 = total1 + parseInt(alphachar[x]);
  });
  const MAGIC_NUM_FIND = "7";
  const MAGIC_NUM_REPLACE = "1";
  total2 = total1
    .split("")
    .map((x) => x.replace(MAGIC_NUM_FIND, MAGIC_NUM_REPLACE))
    .join("");

  console.log(`1: ${total1}`);
  console.log(`2: ${total2}`);

  total1 = parseInt(total1);
  total2 = parseInt(total2);

  return total1 - total2;
}

console.log(`RES: ${calc("ABC")}`);

//Solution 1: Take the sums first. So much easier :(
function calc(x) {
  let sum = (n) => [...n].reduce((a, b) => +a + +b);
  let total1 = x.replace(/./g, (x) => x.charCodeAt(0));
  let total2 = total1.replace(/7/g, "1");
  return sum(total1) - sum(total2);
}
