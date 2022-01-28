import React, { useState, useEffect } from 'react';
import './App.css';
import Calculation from './Calculation';
import MetersSquared from './MetersSquared';
import Tonnage from './Tonnage';
import Form from "react-bootstrap/Form";
// import Container from "react-bootstrap/Container";


//define metersSquared

const App =() => {

const [metersSquared, setMetersSquared] = useState('');


const [triangleMeasurement, setTriangleMeasurement] = useState(false);
console.log(triangleMeasurement)

const [feetSquared, setFeetSquared] = useState('');
console.log(feetSquared)


  return (
    
    <div className="App">
      <h1 className="title"><b>Asphalt Calculator</b></h1>
      <Form.Group className="triangle" controlId="formBasicCheckbox">
            <Form.Label className="triangle-label">Triangle measurement?</Form.Label>
            <Form.Check className="checkbox" type="checkbox" onChange={(e) =>{setTriangleMeasurement(e.target.checked)}}/>
            </Form.Group>  
            <Form.Group className="triangle-text" controlId="check-text">
            <Form.Text className="triangle-text">
      Check the box if measurement is not squared
    </Form.Text>

            </Form.Group>   
    
      <Calculation metersSquared={triangleMeasurement ? metersSquared / 2 : metersSquared} setMetersSquared={setMetersSquared} feetSquared={triangleMeasurement ? feetSquared / 2 : feetSquared} setFeetSquared={setFeetSquared}/> 
      <MetersSquared />
      <Tonnage metersSquared={triangleMeasurement ? metersSquared / 2 : metersSquared} setMetersSquared={setMetersSquared} />
    
    
      
    </div>
  
  );
}

export default App;
