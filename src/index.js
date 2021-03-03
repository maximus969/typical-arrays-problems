const isArrayValid = (array) => !(typeof array === 'undefined' || array.length === 0)

exports.min = function min(array) {
  if (!isArrayValid(array)) {
    return 0;
  }
  const minOfArray = (acc, current) => Math.min(acc, current);
  return array.reduce(minOfArray, array[0]);
}


exports.max = function max(array) {
  if (!isArrayValid(array)) {
    return 0;
  }
  const maxOfArray = (acc, current) => Math.max(acc, current);
  return array.reduce(maxOfArray, array[0]);
}


exports.avg = function avg(array) {
  if (!isArrayValid(array)) {
    return 0;
  }
  const sumOfArray = (acc, current) => acc + current;
  return array.reduce(sumOfArray, 0) / array.length;
}
