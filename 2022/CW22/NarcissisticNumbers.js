// Quick entry while coding from the beach :) 

function isNarcissistic(n) {
  let digits = Array.from(String(n), Number);
  let total = digits.reduce((prev,curr) => {
    return prev + Math.pow(curr, digits.length)
  }, 0); 
  return total == n ? true : false ;
}
