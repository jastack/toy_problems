function rotateImage(a) {
  var result = [];

  for (var j = 0; j < a.length; j++){
    var row = [];
    for (var i = 0; i < a.length; i++){
      var xPos = a.length - 1 - i;
      row.push(a[xPos][j]);
    }
    result.push(row);
  }

  return result;
}

var arr = [[1, 2, 3],
     [4, 5, 6],
     [7, 8, 9]];


rotateImage(arr);
