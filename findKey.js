const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`🟢🟢🟢Assertion Passed: ${actual} === ${expected}`);
  }
  if (actual !== expected) {
    return console.log(`🔴🔴🔴Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function(obj, callback) {
  for (let key in obj) {
    if (callback(obj[key])) {
      return key;
    }
  }
};

const noma = (findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2));

const akaleri = (findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 3));

const und = (findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 4));

assertEqual(noma, "noma");
assertEqual(akaleri, "Akaleri");
assertEqual(und, undefined);