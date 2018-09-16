var conditionalSum = function(values, condition) {
  if (condition == "even") {
    return addEven(values);
  } else {
    return addOdd(values);
  }
};

function addEven(array) {
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      sum += array[i];
    }
  }
  return sum;
}

function addOdd(array) {
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      sum += array[i];
    }
  }
  return sum;
}

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));