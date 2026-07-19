/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

const isValid = (row, col, k, board) => {
    for (let i = 0; i < 9; i++) {
        if (board[i][col] === k.toString()) return false;
        if (board[row][i] === k.toString()) return false;
        if (board[(3 * Math.floor(row / 3)) + Math.floor(i / 3)][(3 * Math.floor(col / 3)) + i % 3] === k.toString()) return false;
    }
    return true;
};

const solve = (board) => {
    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board.length; col++) {
            if (board[row][col] === '.') {
                for (let k = 1; k < 10; k++) {
                    if (isValid(row, col, k, board)) {
                        board[row][col] = `${k}`;
                        if (solve(board)) {
                            return true;
                        } else {
                            board[row][col] = '.';
                        }
                    }
                }
                return false;
            }
        }
    }
    return true;
}

var solveSudoku = function (board) {
    solve(board);
};