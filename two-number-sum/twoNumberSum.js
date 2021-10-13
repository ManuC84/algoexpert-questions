export function twoNumberSum1(array, targetSum) {
  //Right and left pointers solution O(nlog(n)) time and O(1) space
  //sort array
  //initiate left and right pointers at beginning and end of array
  //loop while left and right pointers dont overlap
  //if the two pointers are the result return result
  //otherwise increase left or right pointer

  const sortedArr = array.sort((a, b) => a - b);

  let leftPointer = 0;
  let rightPointer = array.length - 1;
  while (leftPointer < rightPointer) {
    let currentSum = sortedArr[leftPointer] + sortedArr[rightPointer];
    if (currentSum === targetSum) {
      return [sortedArr[leftPointer], sortedArr[rightPointer]];
    } else if (currentSum < targetSum) {
      leftPointer++;
    } else if (currentSum > targetSum) {
      rightPointer--;
    }
  }
  return [];
}

export function twoNumberSum2(array, targetSum) {
  //Hash table solution O(n) time O(n) space
  //initiate empty object
  //if target sum minus iteration is present in object return it as solution
  //otherwise store iteration in object as true
  //return empty array if solution not found

  let obj = {};
  for (const num of array) {
    const potentialMatch = targetSum - num;
    if (obj.hasOwnProperty(potentialMatch)) {
      return [potentialMatch, num];
    } else {
      obj[num] = true;
    }
  }
  return [];
}
