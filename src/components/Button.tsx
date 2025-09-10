interface IProps {
  text: string;
  onClick?: () => void;
}

const Button = ({ text, onClick }: IProps) => {
  return (
    <button
      className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold py-3 rounded-xl transition"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
