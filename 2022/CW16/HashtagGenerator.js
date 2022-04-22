//Let's help them with our own Hashtag Generator!
//
//Here's the deal:
//
//    It must start with a hashtag (#).
//    All words must have their first letter capitalized.
//    If the final result is longer than 140 chars it must return false.
//    If the input or the result is an empty string it must return false.
//

//My attempt
function generateHashtag (str) {
    if (!str || !str.replace(/\s/g, '').length) {
        console.log("String is undefined or only spaces");
        return false;
    }else{
      let hashtag = `#${str.split(' ').map(x => x.charAt(0).toUpperCase() + x.slice(1)).join('')}`
      if (hashtag.length > 140){
        return false;
      } else {
        console.log("String is over 140 characters");
        return hashtag;
      }
    }
  }