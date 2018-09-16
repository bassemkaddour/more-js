var repeatNumbers = function(data) {
  var string_out = "";
  for (var i = 0; i < data.length; i++) {
    string_out += arrayToString(data[i]);

    if (i != data.length - 1) {
      string_out += ", ";
    }
  }
  return string_out;
};

function arrayToString(array) {
  var number = "";
  for (var j = 0; j < array[1]; j++) {
    number += array[0];
  }
  return number;
}

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));