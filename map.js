/* const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    return console.log(`🟢🟢🟢Assertion Passed: ${actual} === ${expected}`);
  }
  if (!eqArrays(actual, expected)) {
    return console.log(`🔴🔴🔴Assertion Failed: ${actual} !== ${expected}`);
  }
}; */

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

module.exports = map;

/* assertArraysEqual(map(["ground", "control", "to", "major", "tom"], word => word[0]), [ 'g', 'c', 't', 'm', 't' ])
assertArraysEqual(map([1, 2, 3], num => num * 2), [2, 4, 6])
assertArraysEqual(map([1, 2, 3], num => num + 1), [2, 4, 6])
assertArraysEqual(map([1, 2, 3], num => num + 1), [2, 3, 4]) */