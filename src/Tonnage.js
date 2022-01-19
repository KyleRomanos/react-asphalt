import React, { useState, useEffect } from 'react';
// import { render } from 'react-dom';

export default function Tonnage() {

    const [asphaltHeight, setAsphaltHeight] = useState('');
    const [squaredMeters, setSquaredMeters] = useState('');
    const [tonnes, setTonnes] = useState([])
    const [items, setItems] = useState([])
    // const [totalTonnage, setTotalTonnage] = useState([])
 
  

    useEffect(() => {
        const calculateTonnes = parseFloat(0.000246).toPrecision(3) * parseInt(asphaltHeight) * 10 * parseInt(squaredMeters)
        if(asphaltHeight && squaredMeters) {
           
            setTonnes(calculateTonnes)    
    }

}, [asphaltHeight, squaredMeters])

 
const addItem = () => {
    setItems([...items, {
        id: items.length,
        value: tonnes.toPrecision(3)
    }])

 }

console.log(items)

const totalTonnage = items.reduce((total, item) => {
    return parseInt(total + parseInt(item.value))
}, 0)

console.log(totalTonnage)


//  const totalTonnage = (this.state.items.reduce((previousState, currentState) => previousState = previousState + currentState.value, 0))


 



 
// function calculateResults() {
//     setResults([...results.length])
// }


// function addResult(event) {
//     event.preventDefault();
//     results.push(parseFloat(tonnes))
//     console.log(results)
//     setResults(results)
//     return results
// }
// addResult = () => {
//     setResults([...results, {
//         id: results.length,
//         value: results.reduce((previousState, currentState) => previousState + currentState)
//     }])
// }

    // const totalTonnage = (event) => {
    //     event.preventDefault()
    //     results.push(parseFloat(tonnage))

    //     let totalTonnage = results.map((result) => `<li>${result}</li>`).join('');
    //    totalTonnage += `<b><li><h5>Total Tonnage:<h5></b><p> ${results.reduce((previousValue, currentValue) => previousValue + currentValue)}<p></li>`
    //     setResults(totalTonnage)
        
    // }

    // const handleClick = (e) => {
    //     e.preventDefault()
    //     const results = parseFloat(0.000246).toPrecision(3) * parseInt(asphaltHeight) * 10 * parseInt(squaredMeters)
    //     setResults([...results, parseFloat(results).toPrecision(3)])
    // }

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
                {tonnes}

            </form>

           
        <div>
            <button onClick={addItem}>Add</button>
            
            <ul>
                {items.map(item => (
                    <li key={item.id}>{item.value}</li>
                    
                ))}
            </ul>

            <h4><b>Total Tonnage:</b></h4>
             <div>
                 {totalTonnage}
             </div>
                <h4><b>Estimated Cost:</b></h4>
             <div>
                ${totalTonnage * 65} 
             </div>

        </div>
        
            </div>
        )
    
    }

