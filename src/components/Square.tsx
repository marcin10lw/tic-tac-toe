type SquareProps = {
  value: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const Square = ({ onClick, value }: SquareProps) => {
  return <button onClick={onClick}>{value}</button>;
};

export default Square;
