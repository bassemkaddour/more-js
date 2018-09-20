var calculateChange = function(total, cash) {
  var change = {};
  var owing = cash - total;

  if (owing / 2000 >= 1) {
    change["twenty"] = Math.floor(owing / 2000);
    owing -= change.twenty * 2000;
  }

  if (owing / 1000 >= 1) {
    change["ten"] = Math.floor(owing / 1000);
    owing -= change.ten * 1000;
  }

  if (owing / 500 >= 1) {
    change["five"] = Math.floor(owing / 500);
    owing -= change.five * 500;
  }

  if (owing / 200 >= 1) {
    change["twoDollar"] = Math.floor(owing / 200);
    owing -= change.twoDollar * 200;
  }

  if (owing / 100 >= 1) {
    change["dollar"] = Math.floor(owing / 100);
    owing -= change.dollar * 100;
  }

  if (owing / 25 >= 1) {
    change["quarter"] = Math.floor(owing / 25);
    owing -= change.quarter * 25;
  }

  if (owing / 10 >= 1) {
    change["dime"] = Math.floor(owing / 10);
    owing -= change.dime * 10;
  }

  if (owing / 1 >= 1) {
    change["penny"] = Math.floor(owing / 1);
    owing -= change.penny;
  }

  return change;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));
