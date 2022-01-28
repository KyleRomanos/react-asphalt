import React, {useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form'

export default function MetersSquared() {

     
    const [feetSquared, setFeetSquared] = useState('');
    const [metersSquared, setMetersSquared] = useState('');
        
    
    useEffect(() => {
        const newMetersSquared = parseInt(feetSquared) / 10.76;
        if (feetSquared) {
     
        setMetersSquared(newMetersSquared);
    }},[metersSquared, feetSquared]) 


        return (
            
        
                <Form>
                <Form.Group className="mb-3" controlId="squared-meters">
                <Form.Label>Feet Squared</Form.Label>
                <Form.Control type="number" value={feetSquared} onChange={(e) => setFeetSquared(e.target.value)} placeholder="Only used if a direct conversion to Meters Squared is required" />
      
      </Form.Group>
            
                
      <Form.Group className="mb-3" controlId="squared-meters">
            <Form.Label>Meters Squared:</Form.Label>
            <Form.Control type="number" className="output" value={metersSquared} disabled/>
            </Form.Group>
            </Form>
           
        )
        }
    
