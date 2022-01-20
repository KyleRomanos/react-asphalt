import React, { useState, useEffect } from 'react';
import useLocalStorage from './UseLocalStorage';

//use state
export default function Tonnage() {

    const [asphaltHeight, setAsphaltHeight] = useState('');
    const [squaredMeters, setSquaredMeters] = useState('');
    const [tonnes, setTonnes] = useState([])
    const [items, setItems] = useLocalStorage("items", [])
   
   
 
  
//use effect main tonnes calculation
    useEffect(() => {
        const calculateTonnes = parseFloat(0.000246).toPrecision(3) * parseInt(asphaltHeight) * 10 * parseInt(squaredMeters)
        if(asphaltHeight && squaredMeters) {
           
            setTonnes(calculateTonnes)    
    }

}, [asphaltHeight, squaredMeters])

//click event that adds calculation to list 
const addItem = (event) => {
    event.preventDefault()
    setItems([...items, {
        id: items.length,
        value: tonnes.toPrecision(3)
    }])
   
 }

//  localStorage.setItem('items', JSON.stringify(items))
//  const localData = () => {
//     localStorage.getItem(items)
//     return localData
//  } 
 



///total tonnage calculated from list above 
const totalTonnage = items.reduce((total, item) => {
    return parseInt(total + parseInt(item.value).toPrecision())
}, 0)



//delete item from list

const deleteItem = (id) => {
   const updatedItems = [...items].filter((item) => item.id !== id) 
   setItems([...updatedItems])
}

const resetBtn = (event) => {
    localStorage.clear(); 
    window.location.reload();
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
                {tonnes}

            </form>

           
        <div>
            <button onClick={addItem}>Add</button>
            
            <ul>
                {items.map(item => (
                    <li key={item.id}>{item.value} <button onClick={() => deleteItem(item.id)}>X</button></li>
                    
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

             <div>
                 <button onClick={resetBtn}>Reset</button>
             </div>

        </div>
        
            </div>
        )

    
    }
