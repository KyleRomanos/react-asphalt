import React, {useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function MetersSquared() {

     
    const [feetSquared, setFeetSquared] = useState('');
    const [metersSquared, setMetersSquared] = useState('');
        
    
    useEffect(() => {
        const newMetersSquared = parseInt(feetSquared) / 10.76;
        if (feetSquared) {
     
        setMetersSquared(newMetersSquared);
    }},[metersSquared, feetSquared]) 


        return (
            
            <div>
                <h4 className="input"><b>Feet Squared</b></h4>
            <form>
                <div>
                <input className="input-class" type="number" value={feetSquared} onChange={(e) => setFeetSquared(e.target.value)} placeholder="enter feet squared"/>
                </div>
                <h4 className="output-reference"><b>Meters Squared:</b></h4>
            <div className="output">{metersSquared}</div>
            </form>
            </div>
        )
        }
    
