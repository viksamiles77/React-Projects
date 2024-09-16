import "../styles/Keyboard.css"

interface KeyboardProps {
  onLetterClick: (letter: string) => void;
  correctLetters: string[];
  wrongLetters: string[];
}


const Keyboard = ({onLetterClick, correctLetters, wrongLetters}: KeyboardProps) => {
  return (
    <div className="keyboard-container">
      {Array.from({ length: 26 }, (_, i) => String.fromCharCode(97 + i)).map((letter) => (
        <button
          key={letter}
          onClick={() => onLetterClick(letter)}
          disabled={correctLetters.includes(letter) || wrongLetters.includes(letter)}
          className="keyboard-button"
        >
          {letter}
        </button>
      ))}
    </div>
  );
};

export default Keyboard;