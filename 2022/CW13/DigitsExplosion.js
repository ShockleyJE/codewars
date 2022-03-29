// Given a string made of digits [0-9], return a string where each digit is repeated a number of times equals to its value. 

//Examples

//explode("312")

//should return :

//"333122"

function explode(s) {

    string = "";

    for (let i = 0; i < s.length; i++){

        if(s.charAt(i) != 0){
            for (let j = 0; j < s.charAt(i); j++){
                string += s.charAt(i);
            }
        }
    }

    return string;
  }


//--------------------------------------------
// Solution 1: Regex replacement
// Replace each digit globally with the value repeated value times

const explode = s => s.replace(/\d/g, d => d.repeat(d));

// Solution 2: 
// Break the string into characters s.split("")
// map an anonymous function to each element .map((e) => ...)
  // repeat each element e times
// join each element 

function explode(s) {
    return s.split("").map((e) => e.repeat(+e)).join("");
  }


