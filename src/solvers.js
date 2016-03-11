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
  // have no another n's left
  //record the number of solutions
// we start off with with a specific column, taking it as a parameter;
  // we use the helper solution to find each solution;
  // time we find a solution, we will change the start column of the first n.
  
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
  console.log(n);
  var board = new Board({n: n });
  var row = 0;
  var col = 0;
  var num = n;
  var counter = 0;
  var solution = board.rows();
  var numSolutions = 0;
  debugger;
  var inner = function(col) {
    
      
    for (var j = 0; j < num; j++) {
      // loop through the first row from the position of the first queen 
      for (var i = col; i < num; i++) {
      // initialize the first queen
        // addition
        counter++;
        board.togglePiece(j, i);
      // check for conflicts
        if (board.hasAnyQueensConflicts()) {
          // if no conflict
          // subraction
          board.togglePiece(j, i);
          counter--;
        }    
      }
    }
    if (counter === n) {
      return solution;
    } else {
      board = new Board({n: n });
      return inner(col++);
    }
    
  };
  
  return inner(col); 
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
