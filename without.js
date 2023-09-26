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

const without = function(arrayOne, arrayTwo) {
  let result = [];
  let remove = 0;
  for (let i = 0; i < arrayOne.length; i++) {
    remove = 0;
    for (let j = 0; j < arrayTwo.length; j++) {
      if (arrayOne[i] === arrayTwo[j]) {
        remove = 1;
        break;
      }
    }
    if (!remove) {
      result.push(arrayOne[i]);
    }
  }
  return result;
};

module.exports = without;
/* 
console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]); */