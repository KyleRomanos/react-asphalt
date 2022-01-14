import React, { useState, useEffect } from 'react';
// import { render } from 'react-dom';

export default function Tonnage() {

    const [asphaltHeight, setAsphaltHeight] = useState('');
    const [squaredMeters, setSquaredMeters] = useState('');
    const [tonnage, setTonnage] = useState('');
    const [results, setResults] = useState([]);

    useEffect(() => {
        const calculateTonnage = parseFloat(0.000246).toPrecision(3) * parseInt(asphaltHeight) * 10 * parseInt(squaredMeters)
        if(asphaltHeight && squaredMeters) {
        setTonnage(calculateTonnage) 
    }}, [asphaltHeight, squaredMeters, tonnage])

    const totalTonnage = (event) => {
        results.push(parseFloat(tonnage))
    }


        return (
            
            <div>
            <form>
                <div>

                <h4>Asphalt Height(mm)</h4>

                <input type="number" value={asphaltHeight} onChange={(e) => setAsphaltHeight(e.target.value)}  placeholder="enter height in mm..."/>

                <h4>Meters Squared</h4>

                <input type="number" value={squaredMeters} onChange={(e) => setSquaredMeters(e.target.value)}  placeholder="enter meters squared..."/>
                </div>
                

                <h4><b>Tonnes:</b></h4>

                {tonnage}

                <div><button onClick={totalTonnage} type="submit">Add</button></div>

                <h5><b>Total Tonnage:</b></h5>            
                    {totalTonnage()}
                <h5><b>Estimated Cost:</b></h5>

            </form>
            </div>
        )
    
    }

