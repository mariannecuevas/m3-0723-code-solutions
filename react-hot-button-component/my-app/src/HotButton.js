import { useState } from 'react';

function HotButton({ onClick }) {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  const btnClassName =
    count >= 18
      ? 'white'
      : count >= 15
      ? 'yellow'
      : count >= 12
      ? 'light-salmon'
      : count >= 9
      ? 'red'
      : count >= 6
      ? 'blue-violet'
      : count >= 3
      ? 'indigo'
      : 'indigo';

  return (
    <button onClick={handleClick} className={btnClassName}>
      Hot Button
    </button>
  );
}

export default HotButton;
