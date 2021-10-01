export class TicTacToe {
  previousTurn: string = '';

  makeMove(
    player: string,
    coordinate: { x: number; y: number }
  ): string | undefined {
    if (this.previousTurn === player) {
      throw new Error('Player has taken 2 goes in a row');
    }

    this.previousTurn = player;

    return undefined;
  }
}
