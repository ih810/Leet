/*
    Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:
    1. Each row must contain the digits 1-9 without repetition.
    2. Each column must contain the digits 1-9 without repetition.
    3. Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
*/

function isValidSudoku(board: string[][]): boolean {
    const rows = Array.from({ length: 9 }, () => new Set<string>());
    const columns = Array.from({ length: 9 }, () => new Set<string>());
    const boxes = Array.from({ length: 9 }, () => new Set<string>());

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const num = board[i][j];
            if (num === '.') continue;

            const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
            if (rows[i].has(num) || columns[j].has(num) || boxes[boxIndex].has(num)) {
                return false;
            }

            rows[i].add(num);
            columns[j].add(num);
            boxes[boxIndex].add(num);
        }
    }

    return true;
}