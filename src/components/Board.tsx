import { Squares } from "../types";
import Square from "./Square";

type BoardProps = {
  squares: Squares;
  handleClick: (index: number) => void;
};

const Board = ({ squares, handleClick }: BoardProps) => {
  return (
    <div className="inline-grid grid-cols-3 grid-rows-3 border-2 border-teal-500">
      {squares.map((square, index) => (
        <Square
          key={index}
          value={square}
          handleClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
};

export default Board;
