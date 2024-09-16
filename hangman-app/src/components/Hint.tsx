import "../styles/Hint.css"

const Hint = ({hintText, showHint}: {hintText: string, showHint: boolean}) => {
  return (
    <p className={`hint-text ${showHint ? 'visible' : 'hidden'}`}>
      {hintText}
    </p>
  );
};

export default Hint;