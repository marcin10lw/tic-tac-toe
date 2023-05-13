import { useState } from "react";
import Board from "./Board";
import { calculateWinner } from "../calculateWinner";

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(board);

  const handleClick = (i: number) => {
    const newBoard = [...board];

    if (winner || newBoard[i]) return;

    newBoard[i] = xIsNext ? "X" : "O";
    setBoard(newBoard);
    setXIsNext((xIsNext) => !xIsNext);
  };

  const jumpTo = () => {};

  const startNewGame = () => (
    <button
      className="text my-2 w-full rounded-md bg-pink-400 p-2 text-xl font-bold tracking-wide text-white hover:opacity-80"
      onClick={() => setBoard(Array(9).fill(null))}
    >
      New Game
    </button>
  );

  return (
    <section>
      <Board squares={board} handleClick={handleClick} />
      <div>
        <p className="text my-2 rounded-md p-2 text-center text-2xl font-semibold tracking-wide text-white">
          {winner
            ? `Winner is: ${winner}`
            : `Next Player: ${xIsNext ? "X" : "O"}`}
        </p>
        {startNewGame()}
      </div>
    </section>
  );
};

export default Game;
