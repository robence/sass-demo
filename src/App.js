import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="orange-container">
        <p>Turn left to go right!</p>
        <div className="button-group">
          <button id="left">Left</button>
          <button id="right">Right</button>
        </div>
      </div>
    </div>
  );
}

export default App;
