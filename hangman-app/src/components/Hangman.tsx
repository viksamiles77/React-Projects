import { useState, useEffect } from 'react';
import { wordList } from '../assets/wordList';
import Keyboard from './Keyboard';
import GuessedInfo from './GuessedInfo';
import Image from './Image';
import WordDisplay from './WordDisplay';
import Title from './Title';
import Button from './Button';
import Hint from './Hint';
import GameOverWindow from './GameOverWindow';
import CategoryTypeInfo from './CategoryTypeInfo';
import '../styles/Hangman.css';

const maxGuess = 6;

interface HangmanProps {
	selectedCategory: string;
	onBack: () => void;
}

const Hangman = ({ selectedCategory, onBack }: HangmanProps) => {
	const [wordHintCombo, setWordHintCombo] = useState<{
		word: string;
		hint: string;
	} | null>(null);
	const [currentWord, setCurrentWord] = useState<string>('');
	const [correctLetters, setCorrectLetters] = useState<string[]>([]);
	const [wrongLetters, setWrongLetters] = useState<string[]>([]);
	const [wrongGuessCount, setWrongGuessCount] = useState<number>(0);
	const [isGameOver, setIsGameOver] = useState<boolean>(false);
	const [showHint, setShowHint] = useState<boolean>(false);
	const [hasWon, setHasWon] = useState<boolean>(false);

	const getRandomWord = () => {
		const filteredWords =
			selectedCategory === 'all'
				? wordList
				: wordList.filter((word) => word.category === selectedCategory);

		const randomWordHintCombo =
			filteredWords[Math.floor(Math.random() * filteredWords.length)];
		setWordHintCombo(randomWordHintCombo);
		setCurrentWord(randomWordHintCombo.word.toLowerCase());
		setCorrectLetters([]);
		setWrongLetters([]);
		setWrongGuessCount(0);
		setIsGameOver(false);
		setShowHint(false);
		setHasWon(false);
	};

	useEffect(() => {
		getRandomWord();
	}, []);

	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			const letter = event.key.toLowerCase();
			if (/^[a-z]$/.test(letter)) {
				handleLetterClick(letter);
			}
		};

		window.addEventListener('keydown', handleKeyDown);

		return () => {
			window.removeEventListener('keydown', handleKeyDown);
		};
	}, [correctLetters, wrongLetters, isGameOver, currentWord, wrongGuessCount]);

	const handleLetterClick = (letter: string) => {
		if (
			isGameOver ||
			correctLetters.includes(letter) ||
			wrongLetters.includes(letter)
		)
			return;

		if (currentWord.includes(letter)) {
			const newCorrectLetters = [...correctLetters, letter];
			setCorrectLetters(newCorrectLetters);

			const guessedWord = currentWord
				.split('')
				.map((char) => (newCorrectLetters.includes(char) ? char : '_'))
				.join('');

			if (guessedWord === currentWord) {
				setHasWon(true);
				setIsGameOver(true);
				return;
			}

			return;
		}

		const newWrongGuessCount = wrongGuessCount + 1;
		setWrongLetters([...wrongLetters, letter]);
		setWrongGuessCount(newWrongGuessCount);

		if (newWrongGuessCount >= maxGuess) {
			setIsGameOver(true);
		}
	};

	const resetGame = () => {
		getRandomWord();
	};

	const toggleHintVisibility = () => {
		if (isGameOver) return;
		setShowHint((prevShowHint) => !prevShowHint);
	};

	return (
		<div className="hangman-container">
			<Title />
			<CategoryTypeInfo selectedCategory={selectedCategory} />
			<WordDisplay currentWord={currentWord} correctLetters={correctLetters} />
			<Image wrongGuessCount={wrongGuessCount} />
			<GuessedInfo wrongGuessCount={wrongGuessCount} maxGuess={maxGuess} />
			<Hint hintText={wordHintCombo?.hint || ''} showHint={showHint} />
			<Keyboard
				onLetterClick={handleLetterClick}
				correctLetters={correctLetters}
				wrongLetters={wrongLetters}
			/>
			<Button className="button again" onClick={resetGame}>
				Play Again
			</Button>
			<Button className="button hint" onClick={toggleHintVisibility}>
				Hint
			</Button>
			<Button className="button back" onClick={onBack}>
				Go Back
			</Button>
			{isGameOver && <GameOverWindow hasWon={hasWon} onPlayAgain={resetGame} />}
		</div>
	);
};

export default Hangman;
