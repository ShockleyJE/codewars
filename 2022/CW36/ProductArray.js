//https://www.codewars.com/kata/5a905c2157c562994900009d
function productArray(numbers) {
  //your code here
  function productAllBut(idxAllBut, numbers) {
    copy = numbers.slice(idxAllBut, 1);
    productAllBut = copy.reduce((prev, ele) => prev * ele, 1);
    return productAllBut;
  }

  let output = numbers.map((element, idx) => productAllBut(idx, numbers));

  return output;
}
