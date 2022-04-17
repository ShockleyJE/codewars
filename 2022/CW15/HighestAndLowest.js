// 7kyu
//In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

//Notes
//
//    All numbers are valid Int32, no need to validate them.
//    Output string must be two numbers separated by a single space, and highest number is first.
//    There will always be at least one number in the input string.

function highAndLow(numbers){
    arr = numbers.split(' ').sort((a,b) => a-b)
    return `${arr[arr.length -1]} ${arr[0]}`
  }