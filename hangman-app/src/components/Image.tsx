import "../styles/Image.css"

interface ImageProps {
  wrongGuessCount: number;
}

const Image = ({wrongGuessCount}: ImageProps) => {
  return (
    <img className="hangman-image"
        src={`src/assets/hangman-${wrongGuessCount}.svg`}
        alt={`Hangman ${wrongGuessCount}`}
      />
  );
};

export default Image;