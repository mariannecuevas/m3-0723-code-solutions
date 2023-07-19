import logo from './logo.svg';
import './App.css';

function CustomButton({ text, color, onCustomClick }) {
  return (
    <button
      onClick={() => onCustomClick(text)}
      style={{ backgroundColor: color }}>
      {text}
    </button>
  );
}

function App() {
  function handleCustomClick(text) {
    window.alert(text);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
        <CustomButton
          text="Hi!"
          color="lightblue"
          onCustomClick={handleCustomClick}
        />
        <CustomButton
          text="I'm"
          color="pink"
          onCustomClick={handleCustomClick}
        />
        <CustomButton
          text="Mari"
          color="purple"
          onCustomClick={handleCustomClick}
        />
      </header>
    </div>
  );
}

export default App;
