import React from 'react';
import '../node_modules/normalize.css';
import './App.scss';

function App() {
  return (
    <div className="App">
      <div className="orange-container">
        <h2>Tale of a ghost button</h2>
        <p>Turn Left to Go Right</p>
        <div className="button-group">
          <button id="left">Left</button>
          <button id="right">Right</button>
        </div>
      </div>
    </div>
  );
}

export default App;
