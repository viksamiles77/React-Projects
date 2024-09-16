import "../styles/WordDisplay.css"

interface WordDisplayProps {
  currentWord: string;
  correctLetters: string[];
}

const WordDisplay = ({currentWord, correctLetters}: WordDisplayProps) => {
  return (
    <div className="word-display">
        {currentWord.split('').map((letter, index) => (
          <span key={index} className="letter">
            {correctLetters.includes(letter) ? letter : ' '}
          </span>
        ))}
      </div>
  );
};

export default WordDisplay;