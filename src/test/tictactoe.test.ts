import { TicTacToe } from '../main/tictactoe';

describe('Tic Tac Toe', () => {
  const player1 = 'O';
  const player2 = 'X';

  it('should throw an error if player1 moves twice in a row', () => {
    const coordinate1 = {
      x: 0,
      y: 0,
    };

    const coordinate2 = {
      x: 0,
      y: 1,
    };

    const ticTacToe = new TicTacToe();
    ticTacToe.makeMove(player1, coordinate1);

    expect(() => ticTacToe.makeMove(player1, coordinate2)).toThrow(
      'Player has taken 2 goes in a row'
    );
  });

  it.each([
    [[{player: player1, coordinate: {x: 0, y: 0}}
    ],
      undefined],

    [[{player: player1, coordinate: {x: 0, y: 0}},
      {player: player2, coordinate: {x: 0, y: 1}}
    ],
      undefined],

    [[{player: player1, coordinate: {x: 0, y: 0}},
      {player: player2, coordinate: {x: 0, y: 1}},
      {player: player1, coordinate: {x: 1, y: 1}}
    ],
      undefined],

    // player1 wins diagnolly
    [[{player: player1, coordinate: {x: 0, y: 0}},
      {player: player2, coordinate: {x: 0, y: 1}},
      {player: player1, coordinate: {x: 1, y: 1}},
      {player: player2, coordinate: {x: 0, y: 2}},
      {player: player1, coordinate: {x: 2, y: 2}},
    ],
      player1],

     // 5 goes but no winner
    [[{player: player1, coordinate: {x: 0, y: 0}},
      {player: player2, coordinate: {x: 0, y: 1}},
      {player: player1, coordinate: {x: 1, y: 1}},
      {player: player2, coordinate: {x: 0, y: 2}},
      {player: player1, coordinate: {x: 2, y: 1}},
    ],
      undefined]
  ])('When previous steps are %s and next step is %s then the winner is %s',
    (setupSteps,

     expectedWinner) => {
      const ticTacToe = new TicTacToe();

      let result;
      setupSteps.forEach((step) => {
        result = ticTacToe.makeMove(step.player, step.coordinate);
      })

      expect(result).toEqual(expectedWinner);
    });
});
