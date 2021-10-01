export class TicTacToeV2 {

  grid: (Player | undefined) [] = [
    undefined, undefined, undefined,
    undefined, undefined, undefined,
    undefined, undefined, undefined];

  lastPlayer: Player = Player.O;

  play(position: Position): (Player | undefined) [] {
    const currentPlayer = (this.lastPlayer + 1) % 2;

    this.grid[position] = currentPlayer;

    this.lastPlayer = currentPlayer;

    return this.grid;
  }
}

export enum Position {
    TopLeft,
    TopCentre
}

export enum Player {
    X,
    O
}