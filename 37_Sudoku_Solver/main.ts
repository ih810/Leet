/**
    * Write a program to solve a Sudoku puzzle by filling the empty cells.
    * 
    * A sudoku solution must satisfy all of the following rules:
    * 1. Each of the digits 1-9 must occur exactly once in each row.
    * 2. Each of the digits 1-9 must occur exactly once in each column.
    * 3. Each of the digits 1-9 must occur exactly once in each of the 9 3x3 sub-boxes of the grid.
    * 
    * The '.' character indicates empty cells.
    * 
    * Example 1:
    * Input: board = [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]
* Output: [["5","3","4","6","7","8","9","1","2"],["6","7","2","1","9","5","3","4","8"],["1","9","8","3","4","2","5","6","7"],["8","5","9","7","6","1","4","2","3"],["4","2","6","8","5","3","7","9","1"],["7","1","3","9","2","4","8","5","6"],["9","6","1","5","3","7","2","8","4"],["2","8","7","4","1","9","6","3","5"],["3","4","5","2","8","6","1","7","9"]]
* Explanation: The input board is shown above and the only valid solution is shown below.
    */
function isValid(board: string[][], row: number, col: number, num: string): boolean {
    // Check row
    for (let i = 0; i < 9; i++) {
        if (board[row][i] === num) return false;
    }

    // Check column
    for (let i = 0; i < 9; i++) {
        if (board[i][col] === num) return false;
    }

    // Check 3x3 sub-box
    const boxRow = Math.floor(row / 3) * 3;
    const boxCol = Math.floor(col / 3) * 3;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[boxRow + i][boxCol + j] === num) return false;
        }
    }

    return true;
}

function solveSudoku(board: string[][]): boolean {
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            if (board[row][col] === '.') {
                for (let num = 1; num <= 9; num++) {
                    const numStr = num.toString();
                    if (isValid(board, row, col, numStr)) {
                        board[row][col] = numStr;
                        if (solveSudoku(board)) {
                            return true;
                        }
                        board[row][col] = '.'; // backtrack
                    }
                }
                return false; // no valid number found
            }
        }
    }
    return true; // all cells filled
}
