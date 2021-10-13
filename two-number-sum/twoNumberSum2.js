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
