import React, { useState, useEffect } from 'react';

export default function Calculation() {
    // useState hook
    const [length, setLength] = useState('');
    const [width, setWidth] = useState('');
    const [feetSquared, setFeetSquared] = useState('');
    const [metersSquared, setMetersSquared] = useState('');
    const [triangleMeasurement, setTriangleMeasurement] = useState(false);
    const [ priceEstimate, setPriceEstimate] = useState('HL1')
    

    // useEffect is a Hook, it will be called everytime 'length' or 'width' change.
    useEffect(() => {
        const newFeetSquared = parseInt(length) * parseInt(width);
        const newMetersSquared = parseInt(length) * parseInt(width) / 10.76;
        
        if(length && width) {

        setFeetSquared(newFeetSquared);
        setMetersSquared(newMetersSquared);
    }},[length, width]);

    return (
            <div>
                    <div>Triangle Measurement? {triangleMeasurement}
                    <input type="checkbox" name="triangle" onChange={(e) =>{setTriangleMeasurement(e.target.checked) }}/> 
                    
                    </div>
                    <div>
                    <select id="operator">
                      <option value="HL1">HL-1</option>
                      <option value="HL2">HL-2</option>
                      <option value="HL3">HL-3</option>
                      <option value="HL3Fine">HL-3 Fine</option>
                      <option value="HL4">HL-4</option>
                      <option value="HL4Fine">HL-4 Fine</option>
                      <option value="HL5">HL-5</option>
                      <option value="HL8">HL-8</option>Select Asphalt Type
                    </select>
                    </div>
                <h4>Length</h4>
                <form>
                    <div>
                    <input type="number" value={length} onChange={(e) => setLength(e.target.value)} placeholder="enter length in ft..."/>
               
                    <h4>Width</h4>
                    <input type="number" value={width} onChange={(e) => setWidth(e.target.value)} placeholder="enter width in ft..." />
                </div>
                </form>
                <h4><b>Feet Squared:</b></h4>
                {triangleMeasurement ? feetSquared / 2 : feetSquared}
                <h4><b>Meters Squared:</b></h4>
                {triangleMeasurement ? metersSquared / 2 : metersSquared}
            </div>
    )

}
