/*
The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other.
Given an integer n, return all distinct solutions to the n-queens puzzle. You may return the answer in any order.
Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' both indicate a queen and an empty space, respectively.
*/

function solveNQueens(n: number): string[][] {
    const result: string[][] = [];
    
    function backtrack(board: string[][], row: number): void {
        if (row === n) {
            result.push(board.map(row => row.join('')));
            return;
        }
        
        for (let col = 0; col < n; col++) {
            if (isValid(board, row, col)) {
                board[row][col] = 'Q';
                backtrack(board, row + 1);
                board[row][col] = '.';
            }
        }
    }
    
    function isValid(board: string[][], row: number, col: number): boolean {
        for (let i = 0; i < row; i++) {
            if (board[i][col] === 'Q') return false;
            const diff = row - i;
            if (col - diff >= 0 && board[i][col - diff] === 'Q') return false;
            if (col + diff < n && board[i][col + diff] === 'Q') return false;
        }
        return true;
    }
    
    const emptyBoard = Array.from({ length: n }, () => Array(n).fill('.'));
    backtrack(emptyBoard, 0);
    
    return result;
}

// Test cases
console.log(solveNQueens(4)); // Output: [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
console.log(solveNQueens(1)); // Output: [["Q"]]