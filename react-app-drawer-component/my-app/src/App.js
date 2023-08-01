import { useState } from 'react';
import './AppDrawer.css';
import AppDrawer from './AppDrawer';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { id: 1, title: 'Home' },
    { id: 2, title: 'About' },
    { id: 3, title: 'FAQ' },
    { id: 4, title: 'Contact' },
    { id: 5, title: 'Sign In' },
  ];

  const menuHeading = 'Menu';

  function handleToggle() {
    setIsOpen(!isOpen);
  }

  return (
    <div className={`App ${isOpen ? 'open' : ''}`}>
      <AppDrawer
        isOpen={isOpen}
        menuHeading={menuHeading}
        menuItems={menuItems}
        handleToggle={handleToggle}
      />
      {isOpen && <div className="shade" onClick={handleToggle} />}
    </div>
  );
}

export default App;
