//PREP:
//P: String
//R: Strings?
//E:
/*
  P: function punSubs (arr){
    thinking, put all string submissions into array, then loop through array and check for each rule?
  }
  */

function punSubs(subStr) {
  let subArr = subStr.split(",");
  console.log(subArr); //81 total

  //Check no empty spaces at start or end
  let spaceFilt = subArr
    .filter((x, i) => x[0] !== " ")
    .filter((x, i) => x[x.length - 1] !== " ");
  console.log(spaceFilt); //57 left

  //Filter out submissions with 'dog', 'bark', and 'bone' (all casings)
  let dogBarkBoneFilt = spaceFilt
    .filter((x, i) => !x.toLowerCase().includes("dog"))
    .filter((x, i) => !x.toLowerCase().includes("bark"))
    .filter((x, i) => !x.toLowerCase().includes("bone"));
  console.log(dogBarkBoneFilt); //39

  //check total length not a multiple of 5
  let totalLengthFilt = dogBarkBoneFilt.filter((x) => x.length % 5 !== 0);
  console.log(totalLengthFilt); //33

  //check sum of first and last char codes are ODD
  let sumCharCodesFilt = totalLengthFilt.filter((x, i) => {
    return (x.charCodeAt(0) + x.charCodeAt(x.length - 1)) % 2 !== 0;
  });
  console.log(sumCharCodesFilt); //14

  //Check character after middle is not 'e'
  let middleCharFilt = sumCharCodesFilt.filter((x, i) => {
    return x.length % 2 === 0
      ? x.charAt(x.length / 2 + 1) !== "e"
      : x.charAt(Math.ceil(x.length / 2)) !== "e";
  });
  console.log(middleCharFilt); //12

  //check must have even number of lowercase letters
  let lowerCaseCount = middleCharFilt.filter((x) => {
    let count = 0;
    x.match(/[a-z]/) ? (count += 1) : (count += 0);
    return count % 2 == 0;
  });
  console.log(lowerCaseCount);

  //check must have at least 2 capital letters

  //check must not contain capital 'S'
}
