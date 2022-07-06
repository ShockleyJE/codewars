//https://www.codewars.com/kata/5727bb0fe81185ae62000ae3/train/javascript

function cleanString(s) {
  let stack = Array();
  s.split("").forEach((element) => {
    if (element === "#") {
      stack.pop();
    } else {
      stack.push(element);
    }
  });
  return stack.join("");
}

console.log(cleanString("abc#d##c"));
console.log(cleanString("abc####d##c#"));
