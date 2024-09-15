/*
The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other.
Given an integer n, return the number of distinct solutions to the n-queens puzzle.
*/

function totalNQueens(n: number): number {
    let count = 0;
    
    const backtrack = (row: number, cols: number, diag1: number, diag2: number) => {
        if (row === n) {
            count++;
            return;
        }
        
        let availablePositions = ((1 << n) - 1) & ~(cols | diag1 | diag2);
        
        while (availablePositions) {
            const position = -availablePositions & availablePositions;
            availablePositions ^= position;
            backtrack(row + 1, cols | position, (diag1 | position) << 1, (diag2 | position) >> 1);
        }
    };
    
    backtrack(0, 0, 0, 0);
    
    return count;
}