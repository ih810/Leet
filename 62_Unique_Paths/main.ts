/*
  There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]).
  The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]).
  The robot can only move either down or right at any point in time.
  Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.
*/

function uniquePaths(m: number, n: number): number {
    const dp: number[][] = Array.from({ length: m }, () => Array(n).fill(1));

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
    }

    return dp[m - 1][n - 1];
}