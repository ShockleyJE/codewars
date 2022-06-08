// Input: value to return as string
// Output: String representation of input
// Numbers: preserve decimal, signedness
// Arrays: Numbers only, see number. Output format [Number, Number]. Whitespaces do not matter

// function toString(value) {
//   function stringifyNum(num) {
//     return "" + num;
//   }
//   //find the type of the the value
//   if (typeof value === "number") {
//     return stringifyNum(value);
//   } else if (Array.isArray(value) === true) {
//     return (
//       "[" +
//       value.reduce(
//         (previousValue, currentValue) => stringifyNum(value) + ",",
//         ""
//       ) +
//       "]"
//     );
//   } else if (typeof value === "boolean") {
//     return value ? "true" : "false";
//   }
// }

Number.prototype.toString = function () {
  return "" + this.valueOf();
};

Boolean.prototype.toString = function () {
  return this.valueOf() ? "true" : "false";
};

Array.prototype.toString = function () {
  if (this.valueOf().length === 0) {
    return "[]";
  }
  let str = "[";
  this.valueOf().forEach((element) => {
    str += element + ",";
  });

  return str.slice(0, str.length - 1) + "]";
};

toString(123);
toString(3.141592653589793);
toString([1, 2, 3, 4, 5]);
