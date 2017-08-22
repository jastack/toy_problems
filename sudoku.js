function sudoku2(grid) {
  if (checkRows(grid) && checkCols(grid) && checkBlocks(grid)){
    return true;
  } else {
    return false;
  }
}

function checkRows(grid){
  for (var i = 0; i < grid.length; i++){
    var set = new Set();
    // console.log("Here?");
    for (var j = 0; j < grid.length; j++) {
      if (grid[i][j] != '.' && set.has(grid[i][j])){
        return false;
      } else {
        set.add(grid[i][j]);
      }
    }
  }

  return true;
}

function checkCols(grid){
  for (var j = 0; j < grid.length; j++) {
    var set = new Set();

    for (var i = 0; i < grid.length; i++) {
      if (grid[i][j] != '.' && set.has(grid[i][j])){
        return false;
      } else {
        set.add(grid[i][j]);
      }
    }
  }

  return true;
}

function checkBlocks(grid){
  var n = 0;
  var i = 0;
  for (var m = 0; m < 3; m++) {
    for (var n = 0; n < 3; n++) {
      var block = new Set();
      // 0,0
      for (var i = 3*n; i < 3*n + 3; i++) {
        //  i = 0..2
        for (var j = 3*m; j < 3*m + 3; j++) {
          // j = 0..2
          if (grid[i][j] != '.' && block.has(grid[i][j])){
            return false;
          } else {
            block.add(grid[i][j]);
          }
        }
      }
    }
  }
  return true;
}

var grid = [['.', '.', '.', '1', '4', '.', '.', '2', '.'],
        ['.', '.', '6', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '1', '.', '.', '.', '.', '.', '.'],
        ['.', '6', '7', '.', '.', '.', '.', '.', '9'],
        ['.', '.', '.', '.', '.', '.', '8', '1', '.'],
        ['.', '3', '.', '.', '.', '.', '.', '.', '6'],
        ['.', '.', '.', '.', '.', '7', '.', '.', '.'],
        ['.', '.', '.', '5', '.', '.', '.', '7', '.']];


var grid2 = [['.', '.', '.', '.', '2', '.', '.', '9', '.'],
        ['.', '.', '.', '.', '6', '.', '.', '.', '.'],
        ['7', '1', '.', '.', '7', '5', '.', '.', '.'],
        ['.', '7', '.', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '8', '3', '.', '.', '.'],
        ['.', '.', '8', '.', '.', '7', '.', '6', '.'],
        ['.', '.', '.', '.', '.', '2', '.', '.', '.'],
        ['.', '1', '.', '2', '.', '.', '.', '.', '.'],
        ['.', '2', '.', '.', '3', '.', '.', '.', '.']];

console.log(sudoku2(grid));
console.log(sudoku2(grid2));
