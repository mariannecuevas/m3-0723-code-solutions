import { useState } from 'react';

function ToggleSwitch() {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  const containerClassName = isOn
    ? 'toggle-container on'
    : 'toggle-container off';

  return (
    <div className={containerClassName} onClick={handleToggle}>
      <div className="slider"></div>
      <div className="text">{isOn ? 'ON' : 'OFF'}</div>
    </div>
  );
}

export default ToggleSwitch;
