/*
Kyu 7
https://www.codewars.com/kata/592e830e043b99888600002d/train/javascript

Digital Cypher assigns to each letter of the alphabet unique number. For example:

 a  b  c  d  e  f  g  h  i  j  k  l  m
 1  2  3  4  5  6  7  8  9 10 11 12 13
 n  o  p  q  r  s  t  u  v  w  x  y  z
14 15 16 17 18 19 20 21 22 23 24 25 26

Instead of letters in encrypted word we write the corresponding number, eg. The word scout:

 s  c  o  u  t
19  3 15 21 20

s  c  o  u  t
19  3 15 21 20
+ 1  9  3  9  1
---------------
20 12 18 30 21

 m  a  s  t  e  r  p  i  e  c  e
13  1 19 20  5 18 16  9  5  3  5
+  1  9  3  9  1  9  3  9  1  9  3
--------------------------------
14 10 22 29  6 27 19 18  6  12 8

*/

// Input: String of lowercase characters, positive integer
// Output: a=1,z=24 + key.tostring[%input index/key length]
function encode(str, n) {
  // Will want a dict repr a=1,z=24
  // Create function definition to generate this
  function char_to_int() {
    let alpha = "abcdefghijklmnopqrstuvwxyz";
    alpha = alpha.split("");
    let map = {};
    alpha.forEach((char, index) => {
      map[char] = index + 1;
    });
    console.log(map);
    return map;
  }

  //initialize the char_to_int encoding to elements of the string & key to array of digits
  let charmap = char_to_int();
  let keyArr = Array.from(String(n), Number);

  //build the message
  let message = [];
  let splitstr = str.split("");
  splitstr.forEach((val, index) => {
    console.log(`${val}`);
    console.log(`${charmap[str[index]]} + ${keyArr[index % keyArr.length]}`);
    message[index] = charmap[str[index]] + keyArr[index % keyArr.length];
  });
  return message;
}
console.log(`${encode("scout", 1939)}  ==>  [ 20, 12, 18, 30, 21]`);
