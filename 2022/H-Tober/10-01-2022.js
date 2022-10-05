//Day 1, Saturday 10-1-22
//Hint from twitter? "e!!Igv)t5lltBcvbdeDH3dVw!OOtI#Aa.ZMDu7WYpP^VVjDc4I50iv#ylhgmQfs"
/*
'0' <-> 'O'      '5' <-> 'S'
'1' <-> 'I'      '6' <-> 'G'
'2' <-> 'Z'      '7' <-> 'L'
'3' <-> 'E'      '8' <-> 'B'
'4' <-> 'h'      '9' <-> 'q'
*/

//PREP:
//P: String
//R: string fixed from errors
//E: "PR0-T1P #hqB: 1T'5 N1C3 T0 5AY H3770."  ==== "PRO-TIP #498: IT'S NICE TO SAY HELLO."
//P: giant conditional or switch statement?

function stringFix(str) {
  let newStr = "";
  let newArr = [];

  let arrStr = str.split("");

  for (let i = 0; i < arrStr.length; i++) {
    switch (arrStr[i]) {
      case "0":
        newArr.push("O");
        break;
      case "1":
        newArr.push("I");
        break;
      case "2":
        newArr.push("Z");
        break;
      case "3":
        newArr.push("E");
        break;
      case "4":
        newArr.push("h");
        break;
      case "5":
        newArr.push("S");
        break;
      case "6":
        newArr.push("G");
        break;
      case "7":
        newArr.push("L");
        break;
      case "8":
        newArr.push("B");
        break;
      case "9":
        newArr.push("g");
        break;
      default:
        newArr.push(arrStr[i]);
    }
  }
  return newArr.join("");
}
