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

  const renderMoves = () => (
    <button onClick={() => setBoard(Array(9).fill(null))}>Start Game</button>
  );

  return (
    <section>
      <Board squares={board} handleClick={handleClick} />
      <div>
        <p>
          {winner
            ? `Winner is: ${winner}`
            : `Next Player: ${xIsNext ? "X" : "O"}`}
        </p>
        {renderMoves()}
      </div>
    </section>
  );
};

export default Game;
