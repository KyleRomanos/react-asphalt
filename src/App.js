import React from 'react';
import './App.css';
import Calculation from './Calculation';
import MetersSquared from './MetersSquared';
import Tonnage from './Tonnage';

function App() {
  return (
    <div className="App">
      <h1>Asphalt Calculator</h1>
      <Calculation /> 
      <MetersSquared />
      <Tonnage />
    </div>
  );
}

export default App;
