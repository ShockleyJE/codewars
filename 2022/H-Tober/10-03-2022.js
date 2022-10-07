//Day 3, Monday 10-3-22:
//We need to create a function that will replace any instances of any of the key characters in a given string with an empty space (' '). (Key characters = yesterday's soultion: SPACE)

function spaceCase(str) {
  let newStr = str
    .replaceAll("S", "-")
    .replaceAll("P", "-")
    .replaceAll("A", "-")
    .replaceAll("C", "-")
    .replaceAll("E", "-");

  //(THE FOLLOWING IS JUST TO TEST PROVIDED EXAMPLE)
  // let newStr = str.replaceAll('A','-').replaceAll('_','-').replaceAll('K','-').replaceAll('E','-').replaceAll('Y','-').replaceAll('!','-')

  return newStr.split("-").join(" ");
}
