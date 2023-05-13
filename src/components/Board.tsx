import { Squares } from "../types";
import Square from "./Square";

type BoardProps = {
  squares: Squares;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const Board = ({ squares, onClick }: BoardProps) => {
  return (
    <div className="inline-grid grid-cols-3 grid-rows-3 border-2 border-teal-500">
      {squares.map((square, index) => (
        <Square key={index} value={square} onClick={onClick} />
      ))}
    </div>
  );
};

export default Board;
