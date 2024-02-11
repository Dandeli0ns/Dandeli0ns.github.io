import logo from './logo.svg';
import './App.css';
import React from 'react';

const App = () =>  {
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
          rel="noopener noreferrer"
        >
          {process.env.REACT_APP_OPENAI_API_KEY}
        </a>
      </header>
      <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    </div>
  );
}

export default App;
