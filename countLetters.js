/* const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`🟢🟢🟢Assertion Passed: ${actual} === ${expected}`);
  }
  if (actual !== expected) {
    return console.log(`🔴🔴🔴Assertion Failed: ${actual} !== ${expected}`);
  }
};
 */
const countLetters = function(string) {
  const result = {};
  for (let chr of string) {
    if (result[chr] === undefined) {
      result[chr] = 1;
    } else {
      result[chr]++;
    }
  }
  return result;
};

//const test = countletters("www xx ;; yyyy z");


module.exports = countLetters;

/* assertEqual(test["w"], 3);
assertEqual(test[" "], 4);
assertEqual(test["x"], 2);
assertEqual(test[";"], 2);
assertEqual(test["y"], 4);
assertEqual(test["z"], 1);
assertEqual(test["z"], 5); // this one should fail, the rest should pass */

