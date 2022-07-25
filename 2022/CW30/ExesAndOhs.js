//https://www.codewars.com/kata/55908aad6620c066bc00002a

function XO(input){
    
    // Change the string to use a consistent casing

    // split the string into an array

    // filter such that x's are in a subarray

    // the resulting length will be half of the previous array length

    str = str.toLowerCase().split('');
    return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;}