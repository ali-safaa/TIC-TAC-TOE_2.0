class Game {
  constructor() {
    this.turn = 'x';
    this.board = new Array(9).fill(null);
  }
  nextTurn() {
    if (this.turn == 'x') {
      this.turn = 'o';
    } else {
      this.turn = 'x';
    }
  }
  makeMove(i) {
    if (this.endGame()) {
      return;
    }
    if (this.board[i]) {
      return;
    }
    this.board[i] = this.turn;
    const winningCombinations = this.findWinningCombinations();
    if (!winningCombinations) {
      this.nextTurn();
    }
  }

  findWinningCombinations() {
    const WinningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [2, 4, 6],
      [0, 4, 8],
    ];

    for (const Combination of WinningCombinations) {
      const [a, b, c] = Combination;
      if (
        this.board[a] &&
        this.board[a] === this.board[b] &&
        this.board[a] === this.board[c]
      ) {
        return Combination;
      }
    }
    return null;
  }
  endGame() {
    const winningCombinations = this.findWinningCombinations();
    if (winningCombinations) {
      return true;
    } else {
      return false;
    }
  }
}

export default Game;
