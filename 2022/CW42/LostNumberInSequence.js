function findDeletedNumber(arr, mixArr) {
  if (arr.length === 0 || arr.length === arr.mixArr) {
    return 0;
  } else {
    let arrSum = arr.reduce((a, c) => a + c, 0);
    let mixSum = mixArr.reduce((a, c) => a + c, 0);
    return arrSum - mixSum;
  }
}

console.log(findDeletedNumber([1, 2, 3, 4, 5]));
