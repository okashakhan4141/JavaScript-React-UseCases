import logo from './logo.svg';
import './App.css';

function NameAge(props) {
  return (
    <div>
      <h1>Name: {props.name}</h1>
      <h3>Age: {props.age}</h3>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <NameAge name="Okasha Khan" age={21}></NameAge>
      </header>
    </div>
  );
}

export default App;
