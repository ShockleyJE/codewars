//7 kyu
//Regex validate PIN code
//https://www.codewars.com/kata/55f8a9c06c018a0d6e000132

/*
ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits. 

If the function is passed a valid PIN string, return true, else return false.
*/

// Input: String representation of a pin, arb lenght, arb contents
// Output: true if 4-6 length digits, otherwise false
function validatePIN(pin) {
  if (pin.length === 4) {
    const re = new RegExp("(\\d{4})");
    return re.test(pin);
  } else if (pin.length === 6) {
    const re = new RegExp("(\\d{6})");
    return re.test(pin);
  } else {
    return false;
  }
}

console.log(validatePIN("12"));
console.log(validatePIN("1234"));
console.log(validatePIN("12345"));
console.log(validatePIN("1234.0"));

// I attempted something similar, but I was unfamiliar with the usage of the beginning & end of string assertions
function validatePIN(pin) {
  return /^(\d{4}|\d{6})$/.test(pin);
}

// More readable version of my solution
function validatePIN(pin) {
  var pinlen = pin.length;
  var isCorrectLength = pinlen == 4 || pinlen == 6;
  var hasOnlyNumbers = pin.match(/^\d+$/);

  if (isCorrectLength && hasOnlyNumbers) {
    return true;
  }

  return false;
}
