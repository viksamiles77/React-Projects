import {useState} from 'react';
import "../styles/CategorySelector.css"

interface CategorySelectorProps {
  onStartGame: (category: string) => void;
}

const CategorySelector = ({onStartGame}: CategorySelectorProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  console.log(selectedCategory);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
  };

  const handleStartGame = () => {
    onStartGame(selectedCategory);
  };
  

  return (
    <div className='container'>
      <h2>Select a Category</h2>
      <select value={selectedCategory} onChange={handleChange}>
        <option value="all">All Categories</option>
        <option value="city">City</option>
        <option value="country">Country</option>
        <option value="animal">Animal</option>
        <option value="other">Other</option>
      </select>
      <button className='start-btn' onClick={handleStartGame}>Start Game</button>
    </div>
  );
};

export default CategorySelector;