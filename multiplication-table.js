var multiplicationTable = function(maxValue) {
  var maxSquare = (maxValue * maxValue).toString();
  var padding = paddingGenerate(maxValue, maxSquare);
  var multArray = multiply(maxValue);
  var tableOut = ""

  for (var i = 0; i < multArray.length; i++) {
    if (multArray.length == 1) {
      // table of size 1 x 1
      tableOut += padding + '\n' + nextEntry(i, multArray, maxSquare) + '|\n' + padding + '\n';
    } else if (i === 0) {
      // first line
      tableOut += padding + '\n' + nextEntry(i, multArray, maxSquare);
    } else if ((i + 1) % maxValue === 0) {
      // last entry in row + new line of padding
      tableOut += nextEntry(i, multArray, maxSquare) + '|\n' + padding + '\n';
    } else {
      // adding the next entry in a row
      tableOut += nextEntry(i, multArray, maxSquare);
    }
  }
  return tableOut;
};


// makes +---+---+ of the appropriate length
function paddingGenerate(value, max) {
  var padOut = ''
  var unit = '+--'

  for (var i = 0; i < max.length; i++) {
    unit += '-';
  }

  for (var j = 0; j <= value; j++) {
    if (j == value) {
      padOut += '+';
    } else {
      padOut += unit;
    }
  }
  return padOut;
}


//gives an array of the multiples in the correct order
function multiply(maxValue) {
  var arrayOut = [];

  for (var i = 1; i <= maxValue; i ++) {
    for (var j = 1; j <= maxValue; j++) {
      arrayOut.push(i * j);
    }
  }

  return arrayOut;
}

//creates the next entry; makes multiplicationTable more easily readable
function nextEntry(i, multArray, maxSquare) {
  return '| ' + multArray[i].toString() + cellSpace(multArray[i], maxSquare);
}

// determines how many spaces go to the right of a number in a cell
function cellSpace(value, max) {
  var lengthDifference = max.length - value.toString().length;
  var space = '';

  for (var i = 0; i <= lengthDifference; i++) {
    space += ' ';
  }
  return space;
}

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));



