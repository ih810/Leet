/*
Given a positive integer n, generate an n x n matrix filled with elements from 1 to n^2 in spiral order.
*/

function generateMatrix(n: number): number[][] {
    const matrix: number[][] = Array.from({ length: n }, () => Array(n).fill(0));
    let top = 0, bottom = n - 1, left = 0, right = n - 1;
    let num = 1;

    while (num <= n * n) {
        for (let i = left; i <= right && num <= n * n; i++) {
            matrix[top][i] = num++;
        }
        top++;

        for (let i = top; i <= bottom && num <= n * n; i++) {
            matrix[i][right] = num++;
        }
        right--;

        for (let i = right; i >= left && num <= n * n; i--) {
            matrix[bottom][i] = num++;
        }
        bottom--;

        for (let i = bottom; i >= top && num <= n * n; i--) {
            matrix[i][left] = num++;
        }
        left++;
    }

    return matrix;
}