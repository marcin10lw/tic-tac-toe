type SquareProps = {
  value: null | string;
  handleClick: () => void;
};

const Square = ({ handleClick, value }: SquareProps) => {
  return (
    <button
      className="h-28 w-28 border-2 border-teal-600 bg-pink-400 text-7xl text-white hover:opacity-70"
      onClick={handleClick}
    >
      {value}
    </button>
  );
};

export default Square;
