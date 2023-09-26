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

const letterPositions = function(string) {
  const results = {};
  let i = 0;
  // logic to update results here
  for (let letter of string) {
    if (letter !== " ") { 
      if (results[letter] === undefined) {
        results[letter] = [i];
      } else {
        results[letter].push(i);
      }
    }
    i++;
  }
  return results;
};

module.exports = letterPositions;

/* assertArraysEqual(letterPositions("lighthouse in the house").e, [9, 16, 22]);
assertArraysEqual(letterPositions("lighthouse in the house").e, [9, 16, 22, 25]); */