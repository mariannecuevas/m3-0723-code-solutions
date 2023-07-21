import { useState } from 'react';

function ToggleButton({ text, color, onClick }) {
  const [isClicked, setIsClicked] = useState(false);
  console.log('useState:', isClicked);

  function handleClick() {
    console.log('before setter:', isClicked);
    setIsClicked(!isClicked);
    console.log('after setter:', isClicked);
  }

  return (
    <button
      onClick={handleClick}
      style={{ backgroundColor: isClicked ? color : 'white' }}>
      {text}
    </button>
  );
}

export default ToggleButton;
