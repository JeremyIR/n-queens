/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other




// add to n to first row of the board ( // recursive we want to increment the first n over each time)

    // once we add another  n to the second row and check for conflicts
        // if we have conflict, move to another column by toggling
            // toggle over one and check again
                // if check pass, add another n based on previous n location and repeat the process until we 
                    // have no another n's left
                    //record the number of solutions 
window.findNRooksSolution = function(n, startCol) {
  var board = new Board({n: n });
  var row = 0;
  var col = startCol || 0;
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
  var solutionCount = 0; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};


 // for skip rook, we want to go down the column and right in the row.
//     // we know that a rook connot be placed in the same row or column
// window.skipRook = function(solutionBoard) {
//      skipRook(previous)
//     togglePiece(row, col);  
//     }

//     // get the previous row and column and increment
//       // over 1 and down 1,


// };
