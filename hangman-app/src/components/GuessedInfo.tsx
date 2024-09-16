import "../styles/GuessedInfo.css"

interface GuessedInfoProps {
  wrongGuessCount: number;
  maxGuess: number;
}

const GuessedInfo = ({ wrongGuessCount, maxGuess }: GuessedInfoProps) => {
  return (
    <p className="guessed-info">{`${wrongGuessCount} / ${maxGuess}`}</p>
  );
};

export default GuessedInfo;