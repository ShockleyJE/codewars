// Kyu 4(!)
// https://www.codewars.com/kata/51ba717bb08c1cd60f00002f/train/javascript

//A format for expressing an ordered list of integers is to use a comma separated list of either
//
//    individual integers
//    or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'. The range includes all integers in the interval including both endpoints. It is not considered a range unless it spans at least 3 numbers. For example "12,13,15-17"
//
//Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range format.

// Input: Array of integers sorted in increasing order
// Output: A string representation of the input array with sequences of over 3 consecutive numbers abbreviated as a range
function solution(list) {
  // Edge case, return element if only one, two items
  if (list.length < 2) {
    return list;
  }
  console.log(`\nlist: ${list}`);

  var consecutiveCounter = 0;
  var b = []; // Variable for holding our return string as we build it

  // Iterate over items in the list,
  for (let i = 0; i < list.length; i++) {
    if (list[i] + 1 != list[i + 1]) {
      if (consecutiveCounter == 0) {
        b.push(list[i]);
      }
      if (consecutiveCounter == 1) {
        b.push(list[i - 1]);
        b.push(list[i]);
        consecutiveCounter = 0;
      }
      if (consecutiveCounter > 1) {
        b.push(list[i - consecutiveCounter] + "-" + list[i]);
        consecutiveCounter = 0;
      }
    } else {
      consecutiveCounter++;
    }
  }
  return b.join();
}

console.log(
  solution([
    -10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18,
    19, 20,
  ])
);

// Solution 1: Nicely encapsulated code
function solution(individualIntegers) {
  return individualIntegers
    .reduce(splitIntoRanges, [])
    .map(convertToRange)
    .join(",");
}

function splitIntoRanges(ranges, number) {
  if (!ranges.length) {
    ranges.push([number]);
    return ranges;
  }

  var lastRange = ranges[ranges.length - 1];
  var lastNumber = lastRange[lastRange.length - 1];

  number === lastNumber + 1 ? lastRange.push(number) : ranges.push([number]);
  return ranges;
}

function convertToRange(range) {
  return range.length < 3
    ? range.join(",")
    : range[0] + "-" + range[range.length - 1];
}
