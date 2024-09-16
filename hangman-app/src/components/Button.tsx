import "../styles/Button.css"

interface ButtonProps {
  onClick: () => void;
  disabled?: boolean;
  className: string;
  children: React.ReactNode;
};


const Button = ({onClick, disabled = false, className ='', children}: ButtonProps) => {
  return (
    <button
    onClick={onClick}
    disabled={disabled}
    className={`button ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;