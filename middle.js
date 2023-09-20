const eqArrays = function(arr1, arr2) {
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
};

const middle = function(array) {
  lengthOfArray = array.length;
  let result = [];
  if (lengthOfArray < 3) {
    return result;
  }
  if (lengthOfArray % 2 === 0) {
    result.push(array[(lengthOfArray / 2) - 1]);
    result.push(array[(lengthOfArray / 2)]);
  } else {
    result.push(array[(lengthOfArray - 1) / 2]);
  }
  return result;
}

assertArraysEqual((middle([1])), []);
assertArraysEqual((middle([1, 2])), []);
assertArraysEqual((middle([1, 2, 3])), [2]);
assertArraysEqual((middle([1, 2, 3, 4, 5])), [3]);
assertArraysEqual((middle([1, 2, 3, 4])), [2, 3]);
assertArraysEqual((middle([1, 2, 3, 4, 5, 6])), [3, 4]);