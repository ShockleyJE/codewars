// Input: string, representing print string
// Output: String representation of errors in print string / length of print sting
function printer_error(str) {
  let numer, denom;
  // split the input string into array of characters
  let strchars = str.split("");

  // split a string of our good characters into an array of characters
  let goodchars = "abcdefghijklm".split("");

  // filter input string character array
  // array.indexOf(i) returns -1 if i is not found, use this to filter
  let errors = strchars.filter((x) => goodchars.indexOf(x) === -1);

  // reduce the array of strings
  return `${errors.length}/${strchars.length}`;
}
