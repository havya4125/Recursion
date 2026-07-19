/**
 * @param {number} n
 * @return {string[][]}
 */

const isSafe = (row, col, board, n) => {
    let duprow = row;
    let dupcol = col;

    //O(n)
    while (col >= 0) {
        if (board[row][col] === "Q") return false;
        col--;
    }

    row = duprow;
    col = dupcol;

    // O(n)
    while (row >= 0 && col >= 0) {
        if (board[row][col] === "Q") return false;
        row--;
        col--;
    }

    row = duprow;
    col = dupcol;

    //O(n)
    while (row < n && col >= 0) {
        if (board[row][col] === "Q") return false;
        row++;
        col--;
    }

    return true;
}

const solve = (col, board, ans, n) => {
    if (col === n) {
        ans.push(board.map((row) => row.join("")))
        return;
    }
    for (let row = 0; row < n; row++) {
        if (isSafe(row, col, board, n)) {
            board[row][col] = "Q";
            solve(col + 1, board, ans, n);
            board[row][col] = "."
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
    solve(0, board, ans, n);
    return ans;
};