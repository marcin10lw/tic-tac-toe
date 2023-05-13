import { useState } from "react";
import Board from "./Board";
import { calculateWinner } from "../calculateWinner";

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(board);
  console.log(board);

  const handleClick = () => {};

  const jumpTo = () => {};

  const renderMovies = () => {};

  return <Board squares={board} onClick={handleClick} />;
};

export default Game;
