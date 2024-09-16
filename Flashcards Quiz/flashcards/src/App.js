import "./styles.css";
import Header from "./components/Header.js";
import FlashCards from "./components/FlashCards.js"

export default function App() {
  return (
    <div className="App">
      <Header />
      <FlashCards />
    </div>
  );
}
