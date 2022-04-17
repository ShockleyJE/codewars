// Kyu 7

//Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

function solution(nums){
    // sort the array, if it is null then return empty array
    return nums ? nums.sort((a,b) => a-b) : [] ;
  }