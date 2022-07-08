//https://www.codewars.com/kata/545cedaa9943f7fe7b000048

function isPangram(string) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  let stringchars = string.split("").map((x) => x.toLowerCase());
  let foundletters = alphabet.filter((x) => stringchars.find((y) => y === x));
  console.log(foundletters);
  console.log(alphabet);
  return alphabet.length === foundletters.length;
}

var string = "The quick brown fox jumps over the lazy dog.";
console.log(isPangram(string));
