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

  //Solution 1, much cleaner than mine. However, it doesn't handle the space string case.

  function generateHashtag (str) {
    return str.length > 140 || str === '' ? false :
      '#' + str.split(' ').map(capitalize).join('');
  }
  
  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  // I didn't really like the other solutions. They were less readable & clear