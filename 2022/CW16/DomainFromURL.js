// Kyu 5

//Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:
//
//* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
//* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
//* url = "https://www.cnet.com"                -> domain name = cnet"


//My solution passes the defined test cases, but fails on the randomly generated test cases
function domainName(url){
    //your code here
    console.log(url)
    let re1 = new RegExp(/(?:[\w]+\.|\/\/)([\w]+)\./gm);
    return re1.exec(url)[1]
  }

