// Merge Sort out-of-place
// Do not modify the original array
function mergeSort(arr) {

  // Check if the input is length 1 or less
    // If so, it's already sorted: return
  if (arr.length <= 1) return arr;

  // Divide the array in half
  const mid = Math.floor(arr.length / 2);
  // Recursively sort the left half
  const left = mergeSort(arr.slice(0, mid));
  // Recursively sort the right half
  const right = mergeSort(arr.slice(mid));
  // Merge the halves together and return
  return merge(left, right);
}


// Takes in two sorted arrays and returns them merged into one
function merge(arrA, arrB) {

  // Create an empty return array
  const rv = [];

  // Point to the first value of each array
  // While there are still values in each array...
    // Compare the first values of each array
    // Add the smaller value to the return array
    // Move the pointer to the next value in that array

  let aIdx = 0;
  let bIdx = 0;

  while (aIdx < arrA.length && bIdx < arrB.length) {
    if (arrA[aIdx] < arrB[bIdx]) {
      rv.push(arrA[aIdx]);
      aIdx++;
    } else {
      rv.push(arrB[bIdx]);
      bIdx++
    }
  }

  if (aIdx < arrA.length) {
    rv.push(...arrA.slice(aIdx));
  } else {
    rv.push(...arrB.slice(bIdx))
  }

  // Return the return array
  return rv;
}

module.exports = [merge, mergeSort];
