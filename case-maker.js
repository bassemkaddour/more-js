var camelCase = function(input) {
  var splitInput = input.toLowerCase().split(' ');
  var stringOut = splitInput[0];

  for (var i = 1; i < splitInput.length; i++) {
    stringOut += splitInput[i].charAt(0).toUpperCase() + splitInput[i].slice(1);
  }

  return stringOut;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));
console.log(camelCase(""));
console.log(camelCase("THIS IS A STRINg."));