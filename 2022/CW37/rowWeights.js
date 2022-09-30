//https://www.codewars.com/kata/5abd66a5ccfd1130b30000a9/train/javascript
function rowWeights(array) {
  //0-index is team 1, 1 index is team 2
  let teams = [0, 0];

  function assignWeightToTeam(idx, weight) {
    //determines team 1 (0-indexed) or 2 (1-indexed) based on index
    teams[idx % 2] = teams[idx % 2] + weight;
    console.log(`idx: ${idx % 2}`);
  }

  array.forEach((element, idx) => {
    assignWeightToTeam(idx, element);
  });

  return teams;
}

console.log(rowWeights([80]));
