/**
 * @param {number} n
 * @return {string[][]}
 */

// Using hashing

const solve = (col, board, ans, n, leftRow, lowerDiagonal, upperDiagonal) => {
    if (col === n) {
        ans.push(board.map((row) => row.join("")))
        return;
    }
    for (let row = 0; row < n; row++) {
        if (leftRow[row] === 0 && lowerDiagonal[row + col] === 0 && upperDiagonal[n - 1 + col - row] === 0) {
            board[row][col] = "Q";
            leftRow[row] = 1;
            lowerDiagonal[row + col] = 1;
            upperDiagonal[n - 1 + col - row] = 1;
            solve(col + 1, board, ans, n, leftRow, lowerDiagonal, upperDiagonal);
            board[row][col] = "."
            leftRow[row] = 0;
            lowerDiagonal[row + col] = 0;
            upperDiagonal[n - 1 + col - row] = 0;
        }
    }
}

var solveNQueens = function (n) {
    let board = [];
    for (let row = 0; row < n; row++) {
        board[row] = [];
        for (let col = 0; col < n; col++) {
            board[row][col] = "."
        }
    }
    const ans = [];
    let leftRow = Array.from({ length: n }).fill(0);
    let lowerDiagonal = Array.from({ length: 2 * n - 1 }).fill(0);
    let upperDiagonal = Array.from({ length: 2 * n - 1 }).fill(0);
    solve(0, board, ans, n, leftRow, lowerDiagonal, upperDiagonal);
    return ans;
};