import {Player, Position, TicTacToeV2} from "../main/ticTacToeV2";

describe('Tic Tac Toe V2', () => {
    const player1 = Player.X;
    const player2 = Player.O;

    it.each([
        [[
            Position.TopLeft
        ], [
            player1, undefined, undefined,
            undefined, undefined, undefined,
            undefined, undefined, undefined
        ]],

        [[
            Position.TopLeft,
            Position.TopCentre
        ], [
            player1, player2, undefined,
            undefined, undefined, undefined,
            undefined, undefined, undefined
        ]]
    ])("After steps %s the grid should be %s", (steps: Position[], expectedGrid: (Player | undefined)[]) => {
        const ticTacToe = new TicTacToeV2();

        let result;
        steps.forEach(step => {
            result = ticTacToe.play(step);
        })

        expect(result).toEqual(expectedGrid);
    });
})