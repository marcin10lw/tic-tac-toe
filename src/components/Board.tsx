import Square from "./Square";

type BoardProps = {
  squares: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const Board = ({ squares, onClick }: BoardProps) => {
  return (
    <div>
      <Square value="1" onClick={() => onClick("dummy value")} />
      <Square value="2" onClick={() => onClick("dummy value")} />
      <Square value="3" onClick={() => onClick("dummy value")} />
      <Square value="4" onClick={() => onClick("dummy value")} />
      <Square value="5" onClick={() => onClick("dummy value")} />
      <Square value="6" onClick={() => onClick("dummy value")} />
      <Square value="7" onClick={() => onClick("dummy value")} />
      <Square value="8" onClick={() => onClick("dummy value")} />
      <Square value="9" onClick={() => onClick("dummy value")} />
    </div>
  );
};

export default Board;
