type SquareProps = {
  value: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const Square = ({ onClick, value }: SquareProps) => {
  return (
    <button
      className="h-16 w-16 border-2 border-teal-600 bg-pink-400 text-xl text-white hover:opacity-70"
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default Square;
