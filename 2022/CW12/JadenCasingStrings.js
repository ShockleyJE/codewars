//Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

//Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

//Example:

//Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
//Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"

// first attempt, non-working solution
String.prototype.toJadenCase = function () {
    
    // Split the string into words
    let words = this.split[' ']
    let jadenedstring = ""
    words.forEach(element => {
        str = toUpper(element.charAt[0]) + element.substr(1) + ' ';
        jadenedstring = jadenedstring + str;
    });
    return jadenedstring;
  };

  //second attempt, map a function to each word
  // return each word with the first character shifted and a slice of the rest of the word applied
  // each word returned by the function is joined with a space
  String.prototype.toJadenCase = function () { 
    return this.split(" ").map(function(word){
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(" ");
  }