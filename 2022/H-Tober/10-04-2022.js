//PREP:
//P: a string
//R: string but reversed, and preserve whitespace, casing, and punctuation
//E: function strRev ("   The white space at the beginning of this string doesn't match the whitespace at the end. ") === " .dne eht ta ecapsetihw eht hctam t'nseod gnirts siht fo gninnigeb eht ta ecaps etihw ehT   "
/*P:
  function strRev(str){
    .split into array, reverse array, and join?
  }
  */

function strRev(str) {
  let arrRevJoin = str.split("").reverse().join("");
  return arrRevJoin;
}
