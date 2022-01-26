import React from 'react';
import './App.css';
import Calculation from './Calculation';
import MetersSquared from './MetersSquared';
import Tonnage from './Tonnage';
import Form from "react-bootstrap/Form";
// import Container from "react-bootstrap/Container";


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
