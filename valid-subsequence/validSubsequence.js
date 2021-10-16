export function isValidSubsequence1(array, sequence) {
  //o(n) time , O(1) space

  let arrPointer = 0;
  let seqPointer = 0;
  while (arrPointer < array.length && seqPointer < sequence.length) {
    if (array[arrPointer] === sequence[seqPointer]) {
      seqPointer++;
    }
    arrPointer++;
  }
  return seqPointer === sequence.length;
}

export function isValidSubsequence2(array, sequence) {
  //o(n) time , O(1) space

  let seqIdx = 0;
  for (let i = 0; i < array.length; i++) {
    if (seqIdx === sequence.length) break;
    if (array[i] === sequence[seqIdx]) seqIdx++;
  }
  return seqIdx === sequence.length;
}
