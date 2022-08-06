/**
 * This function takes a number and returns the fibonacci sequence up to that number using recursion.
 * @param {number} n - The number to generate the fibonacci sequence up to.
 * @returns {number[]} - The fibonacci sequence up to the number.
 * @example
 * fibsRec(0); // [0]
 * fibsRec(1); // [0, 1]
 * fibsRec(2); // [0, 1, 1]
 */
 function fibsRec(n) {
  if (n === 0) return [0];
  
  if (n === 1)  return [0, 1];

  const prevFibs = fibsRec(n - 1);
  const lastFib = prevFibs[prevFibs.length - 1];
  const secondToLastFib = prevFibs[prevFibs.length - 2];
  return prevFibs.concat(lastFib + secondToLastFib);

}

export default fibsRec;