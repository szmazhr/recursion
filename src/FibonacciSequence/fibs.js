/**
 * This function takes a number and returns the fibonacci sequence up to that number using iteration.
 * @param {number} n - The number to generate the fibonacci sequence up to.
 * @returns {number[]} - The fibonacci sequence up to the number.
 * @example
 * fibs(0); // [0]
 * fibs(1); // [0, 1]
 * fibs(2); // [0, 1, 1]
 */
function fibs(n) {
  const result = [];
  for (let i = 0; i <= n; i++) {
      result.push(i < 2 ?  i : result[i - 1] + result[i - 2]);
  }
  return result;

}

export default fibs;