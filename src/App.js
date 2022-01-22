import React from 'react';
import './App.css';
import Calculation from './Calculation';
import MetersSquared from './MetersSquared';
import Tonnage from './Tonnage';
// import Toast from "react-bootstrap/Toast";
// import Container from "react-bootstrap/Container";
// import Button from "react-bootstrap/Button";

const App =() => {

  return (
    <div className="App">
      <h1 className="title"><b>Asphalt Calculator</b></h1>
     
      <Calculation /> 
      <MetersSquared />
      <Tonnage />
    
      
    </div>
  );
}

export default App;
