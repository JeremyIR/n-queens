/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


window.findSolution = function(row, n, board, validator, callback) {
  // if all rows exhausted, this is a valid solution.
  if (row === n) {
    return callback();
  }

  // iterate over possible decisions
  for (var i = 0; i < n; i++) {
    // place a piece
    board.togglePiece(row, i);
    // recurse into remaining problem
    if (!board[validator]()) {
      var result = findSolution(row + 1, n, board, validator, callback);
      if (result) {
        return result; // EJECT
      }
    }
    // unplace a piece
    board.togglePiece(row, i);
  }
};

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

  var board = new Board({n: n});

  var solution = findSolution(0, n, board, 'hasAnyQueensConflicts', function() {
    return _.map(board.rows(), function(row) {
      return row.slice();
    });
  });
  // If no solution exists, return the original unaltered board
  solution = solution || board.rows();

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {

  var board = new Board({n: n});

  var solutionCount = 0;

  findSolution(0, n, board, 'hasAnyQueensConflicts', function() {
    solutionCount++;
  });

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};

