//Kyu 5

//Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.
//Examples
//
//"()"              =>  true
//")(()))"          =>  false
//"("               =>  false
//"(())((()())())"  =>  true

function validParentheses(parens){
    // create a stack & a map of our opening & closing characters
    let stack = [];
    let map = {
      '(' : ')',
      '{' : '}',
      '[' : ']'
    }
    
    // iterate over the items in the string
    for (var s of parens) {
        if (s === '(' || s === '{' || s === '[' ) {
            // push opening characters to the stack
            stack.push(s);
        }
        else {
            // pop from the stack, check & ensure that the character is mapped to a closing character
            let last = stack.pop(); 
            if(s !== map[last]){
                return false;
            }; 
        } 
    }
    if(stack.length !== 0) {
       return false;
    }
    return true;
}

// Solution 1: Use a variable n to determind sequence depth
function validParentheses(parens){
    var n = 0;
    for (var i = 0; i < parens.length; i++) {
      if (parens[i] == '(') n++;
      if (parens[i] == ')') n--;
      if (n < 0) return false;
    }
    
    return n == 0;
  }

// Solution 2:
// I had something that was smaller and looked cooler, but
// this is how you'd want to write an actual parser.
function validParentheses(string){
    var tokenizer = /[()]/g, // ignores characters in between; parentheses are
        count = 0,           // pretty useless if they're not grouping *something*
        token;
    while(token = tokenizer.exec(string), token !== null){
       if(token == "(") {
          count++;
       } else if(token == ")") {
          count--;
          if(count < 0) {
             return false;
          }
       }
    }
    return count == 0;
 }