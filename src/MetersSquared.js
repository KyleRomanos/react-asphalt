import React, {useState, useEffect } from 'react';


export default function MetersSquared() {

     
    const [feetSquared, setFeetSquared] = useState(null);
    const [metersSquared, setMetersSquared] = useState(null);
        
    
    useEffect(() => {
        const newMetersSquared = parseInt(feetSquared) / 10.76;
        if (feetSquared) {
     
        setMetersSquared(newMetersSquared);
    }},[metersSquared, feetSquared]) 


        return (
            
            <div>
                <h3>Feet Squared</h3>
            <form>
                <div>
                <input type="number" value={feetSquared} onChange={(e) => setFeetSquared(e.target.value)} placeholder="enter feet squared"/>
                </div>
                <h4><b>Meters Squared:</b></h4>
            {metersSquared}
            </form>
            </div>
        )
        }
    
