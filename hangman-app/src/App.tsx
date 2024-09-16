import { useState } from 'react'
import CategorySelector from './components/CategorySelector'
import Hangman from './components/Hangman'
import "./styles/index.css"

function App() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleStartGame = (category: string) => {
    setSelectedCategory(category);
  };

  const handleBack = () => {
    setSelectedCategory(null);
  };

  return (
    <div>
      {selectedCategory === null ? (
        <CategorySelector onStartGame={handleStartGame} />
      ) : (
        <Hangman selectedCategory={selectedCategory}  onBack={handleBack}/>
      )}
    </div>
  )
}

export default App