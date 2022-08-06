/**
 * This function is used to merge two sorted arrays into one sorted array
 * @param {Array} left - The left sorted array
 * @param {Array} right - The right sorted array
 * @returns {Array} - The merged sorted array
 * @example
 * merge([1, 3, 5], [2, 4, 6]); // [1, 2, 3, 4, 5, 6]
 * merge([1, 3, 5], [2]); // [1, 2, 3, 5]
 * merge([1, 3, 5], []); // [1, 3, 5]
 * merge([], [2, 4, 6]); // [2, 4, 6]
 * merge([], [2, 4]); // [2, 4]
 * merge([], []); // []
 */
function merge(left, right) {
  const result = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  return result.concat(left, right);
}


/**
 * This function is used to sort an array using the merge sort algorithm
 * @param {Array} array - The array to be sorted
 * @returns {Array} - The sorted array
 * @example
 * mergeSort([1, 3, 5]); // [1, 3, 5]
 * mergeSort([1, 3, 5, 2, 4, 6]); // [1, 2, 3, 4, 5, 6]
 * mergeSort([1]); // [1]
 * mergeSort([]); // []
 */
function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);
  return merge(mergeSort(left), mergeSort(right));
}

export default mergeSort;