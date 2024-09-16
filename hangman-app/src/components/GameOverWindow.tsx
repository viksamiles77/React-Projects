import "../styles/GameOverWindow.css";

interface GameOverWindowProps {
  hasWon: boolean;
  onPlayAgain: () => void;
}


const GameOverWindow = ({ hasWon, onPlayAgain}: GameOverWindowProps) => {
  return (
    <div className="game-over-overlay">
      <div className="game-over-content">
        <h2>{hasWon ? "Congratulations, You Won!" : "Game Over, You Lost!"}</h2>
        <button onClick={onPlayAgain} className="game-over-button">Play Again</button>
      </div>
    </div>
  );
};

export default GameOverWindow;