import logo from './logo.svg';
import './App.css';
import TestComponent from "./components/TestComponent";
import {useState} from "react";

const Comp = () => {
  return <p>My name is Farzana and my uniqname is farzanac</p>
}

function App() {
    const [count, setCount] = useState(2);
  return (
    <div className="App" id='root'>
            <TestComponent />

      <header className="App-header">

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Comp />
          <button
          onClick={() => setCount(count + 1)}>
              Click Me!
          </button>
          <div>{'🥸'.repeat(count)}</div>

      </header>
    </div>
  );
}

export default App;
