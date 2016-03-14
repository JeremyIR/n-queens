/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting

window.findNRooksSolution = function(n) {

  var board = new Board({n: n });
  var row = 0;
  var col =  0;
  var num = n;
  var solution = board.rows();
  var inner = function () {
    if (num === 0) {
      return solution;
    }
    board.togglePiece(row, col);

      //checks for conflicts, if any, untoggle and
    if (board.hasAnyRooksConflicts()) {

      board.togglePiece(row, col);
      while (board.hasAnyRooksConflicts()) {
        console.log('looping');
        col++;
        row++;
        board.togglePiece(row, col);
      }
    }
    col++;
    row++;
    num--;
    return inner();
  };
  return inner();

};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {

  var total = 1; //fixme
  var inner = function(n) {
  //   if (startPos < n) {
  //     findNRooksSolution(num, startPos);
  //     startPos++;
  //     solutionCount++;
  //     inner();
  //   }


  // };
    var total = 1;
    if (n <= 0 ) {
      return total;
    }
    return n * inner(n - 1);
  };
  return inner(n);
};


// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {

 var board = new Board({'n': n});
  var helper = function(n, row, board) {
    if (row === n) {
      return _.map(board.rows(), function(row) {
        return row.slice();
      });
    }

    for (var i = 0; i < n; i++) {
      board.togglePiece(row, i);
      if (!board.hasAnyQueensConflicts()) {
        var result = helper(n, row + 1, board);
        if (result) {
          return result;
        }
      }
      board.togglePiece(row, i);
    }
  };
  var solution = helper(n, 0, board);
  solution = solution || board.rows();

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
 var solution = new Board({'n': n});
  solutionCount = 0;
  var helper = function(n, row, solution) {

    if (n === row) {
      solutionCount++;
      return;
    }

    for (var i = 0; i < n; i++) {
      solution.togglePiece(row, i);
      if (!solution.hasAnyQueensConflicts()) {
        var result = helper(n, row + 1, solution);
        if (result) {
          return result;
        }
      }
      solution.togglePiece(row, i);
    }
  };
  helper(n, 0, solution);
  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};

