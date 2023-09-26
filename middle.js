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

module.exports = middle;