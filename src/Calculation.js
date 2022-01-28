import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form'


export default function Calculation({metersSquared, setMetersSquared, feetSquared, setFeetSquared}) {
    // useState hook
    const [length, setLength] = useState('');
    const [width, setWidth] = useState('');
    const [squaredFeet, setSquaredFeet] = useState('');
    // const [feetSquared, setFeetSquared] = useState('');
    // const [metersSquared, setMetersSquared] = useState('');
    // const [triangleMeasurement, setTriangleMeasurement] = useState(false);


    // useEffect is a Hook, it will be called everytime 'length' or 'width' change.
    useEffect(() => {
        
        const newFeetSquared = parseInt(length) * parseInt(width);
        const newMetersSquared = parseInt(length) * parseInt(width)/ 10.76;
        
        if(length && width) {

        setFeetSquared(newFeetSquared);
        setMetersSquared(newMetersSquared);
        
    }
},[length, width]);

useEffect(() => {
    setSquaredFeet(feetSquared)
  }, [feetSquared])

 

    return (

        <Form>
 

                    
            <Form.Group className="mb-3" controlId="length">   
             <Form.Label>Length in Feet</Form.Label>
       
                <Form.Control type="number" value={length} onChange={(e) => setLength(e.target.value)} placeholder="Enter length in feet based on field measurement..." />
                </Form.Group> 
                <Form.Group className="mb-3" controlId="width">       
                <Form.Label>Width in Feet</Form.Label>
               
                <Form.Control type="number" value={width} onChange={(e) => setWidth(e.target.value)} placeholder="Enter Width in Feet based on field measurement..." />
                </Form.Group>
             
                <Form.Group className="mb-3" controlId="feet-squared">
                <Form.Label className="output-form">Feet Squared: </Form.Label>
                <Form.Control type="function" className="output"  value={squaredFeet} onChange={(e) => setSquaredFeet(e.target.value)} disabled/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="meters-squared">
                <Form.Label className="output-form">Meters Squared: </Form.Label>
                <Form.Control type="function" className="output"  value={metersSquared} disabled/>
                </Form.Group>
        
            </Form>
    )

}
