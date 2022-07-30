class GameView {
  updateBoard(game) {
    this.updateTurn(game);
    const winningCombinations = game.findWinningCombinations();

    for (let i = 0; i < game.board.length; i++) {
      const title = document.querySelector(`.board-title[data-index='${i}']`);
      const board = document.querySelector('.board');
      console.log(title);
      title.textContent = game.board[i];

      let titleType = game.board[i] == 'x' ? 'title-x' : 'title-o';

      title.innerHTML = `<span class="${titleType}">${
        game.board[i] ? game.board[i] : ''
      }</span>`;
      if (winningCombinations) {
        title.remove();
        board.innerHTML = `<h1 class="winner">You winner</h1>`;
      }
    }
  }

  updateTurn(game) {
    const player_x = document.querySelector('.player-x');
    const player_o = document.querySelector('.player-o');
    player_x.classList.remove('active');
    player_o.classList.remove('active');
    if (game.turn == 'x') {
      player_x.classList.add('active');
    } else {
      player_o.classList.add('active');
    }
  }
}
export default GameView;
