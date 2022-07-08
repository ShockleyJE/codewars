//https://www.codewars.com/kata/62a933d6d6deb7001093de16
function getTheVowels(word) {
  function nextVowel() {
    counter++;
    currvow = vowels.shift();
    vowels.push(currvow);
  }

  let vowels = "aeiou".split("");
  let counter = 0;
  let currvow = vowels.shift();
  vowels.push(currvow);
  let letters = word.split("");
  letters.forEach((element) => {
    if (element === currvow) {
      nextVowel();
    }
  });
  return counter;
}

// neat approach
const getTheVowels = (word, vowels = "aeiou") =>
  word
    .split("")
    .reduce(
      (count, char) => count + (char === vowels[count % vowels.length]),
      0
    );

// sensible default
const getTheVowels = (word, vowels = "aeiou") =>
  word
    .split("") // True equivalates to the addition of one to add to count
    // This handles the loopback of the vowels
    .reduce(
      (count, char) => count + (char === vowels[count % vowels.length]),
      0
    );
