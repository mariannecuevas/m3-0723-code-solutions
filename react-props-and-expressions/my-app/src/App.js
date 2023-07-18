import './App.css';

function CustomButton(props) {
  const { text, color } = props;

  const style = {
    backgroundColor: color,
  };

  return <button style={style}>{text}</button>;
}

function App() {
  return (
    <div>
      <CustomButton text="I" color="lightblue" />
      <CustomButton text="know" color="red" />
      <CustomButton text="React!" color="lightgreen" />
    </div>
  );
}

export default App;
