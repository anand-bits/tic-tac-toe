function isWinner(board, symbol) {
    // Check rows
    for (let i = 0; i < 3; i++) {
      if (board[i * 3] === symbol && board[i * 3 + 1] === symbol && board[i * 3 + 2] === symbol) {
        return true;
      }
    }
  
    // Check columns
    for (let i = 0; i < 3; i++) {
      if (board[i] === symbol && board[i + 3] === symbol && board[i + 6] === symbol) {
        return true;
      }
    }
  
    // Check diagonals
    if (board[0] === symbol && board[4] === symbol && board[8] === symbol) {
      return true;
    }
    if (board[2] === symbol && board[4] === symbol && board[6] === symbol) {
      return true;
    }
  
    // No winner found
    return false;
  }
  
  export default isWinner;
  