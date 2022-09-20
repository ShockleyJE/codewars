/* https://www.codewars.com/kata/5a523566b3bfa84c2e00010b/
 * From the perspective of the runtime it's not the most efficient solution.
 * It could be done with just sort and one reduce method call.
 */
function minSum(arr) {
  return arr
    .sort((a, b) => a - b)
    .map((value, index, array) => {
      // After sorting multiply the first with the last element
      // and the the second with the the penultimate element and so on.
      return value * array[array.length - 1 - index];
    })
    .filter((value, index, array) => {
      // Remove the second half of the array because we created the same
      // product twice.
      return index < array.length / 2; //
    })
    .reduce((total, value) => {
      return total + value;
    });
}
