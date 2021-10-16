export function sortedSquaredArray1(array) {
  // O(n log n) time O(n) space
  return array.map((num) => num * num).sort((a, b) => a - b);
}

export function sortedSquaredArray2(array) {
  //O(n) time and space
  //create array of zeroes to then assign squared numbers by index
  //use math.abs to get absolute numbers
  let sortedSquares = array.map((item) => 0);
  let start = 0;
  let end = array.length - 1;
  for (let i = array.length - 1; i >= 0; i--) {
    let smallerVal = array[start];
    let biggerVal = array[end];
    if (Math.abs(smallerVal) > Math.abs(biggerVal)) {
      sortedSquares[i] = smallerVal ** 2;
      start++;
    } else {
      sortedSquares[i] = biggerVal ** 2;
      end--;
    }
  }
  return sortedSquares;
}

export function sortedSquaredArray3(array) {
  //O(n) time and space
  let output = [];
  let startPointer = 0;
  let endPointer = array.length - 1;
  while (startPointer <= endPointer) {
    if (
      Math.abs(array[startPointer]) > Math.abs(array[endPointer]) ||
      startPointer === endPointer
    ) {
      output.unshift(array[startPointer] ** 2);
      startPointer++;
    } else {
      output.unshift(array[endPointer] ** 2);
      endPointer--;
    }
  }
  return output;
}
