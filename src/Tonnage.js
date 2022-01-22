import React, { useState, useEffect } from 'react';
import useLocalStorage from './UseLocalStorage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

//use state
export default function Tonnage() {

    const [asphaltHeight, setAsphaltHeight] = useState('');
    const [squaredMeters, setSquaredMeters] = useState('');
    const [tonnes, setTonnes] = useState([])
    const [items, setItems] = useLocalStorage("items", [])
   
   
 
  
//use effect main tonnes calculation
    useEffect(() => {
        const calculateTonnes = parseFloat(0.000246) * parseInt(asphaltHeight) * 10 * parseInt(squaredMeters)
        if(asphaltHeight && squaredMeters > 0) {
           
            setTonnes(calculateTonnes)  
    }

}, [asphaltHeight, squaredMeters])

//click event that adds calculation to list 
const addItem = (event) => {
    event.preventDefault()
    if (asphaltHeight && squaredMeters > 0) {
    setItems([...items, {
        id: items.length,
        value: tonnes
    
    }])
} else {
    alert('please enter asphalt height and meters squared!')
}
   
 }

//  localStorage.setItem('items', JSON.stringify(items))
//  const localData = () => {
//     localStorage.getItem(items)
//     return localData
//  } 
 



///total tonnage calculated from list above 
const totalTonnage = items.reduce((total, item) => {
    return (total + (item.value))
}, 0)



//delete item from list

const deleteItem = (id) => {
   const updatedItems = [...items].filter((item) => item.id !== id) 
   setItems([...updatedItems])
}

const resetBtn = () => {
    localStorage.clear(); 
    window.location.reload();
}




        return (
            
            <div>
            <form>
                <div>

                <h4 className="input"><b>Asphalt Height (mm)</b></h4>

                <input type="number" className="input-class" value={asphaltHeight} onChange={(e) => setAsphaltHeight(e.target.value)}  placeholder="enter height in mm..." required />

                <h4 className="input"><b>Meters Squared</b></h4>

                <input type="number" className="input-class" value={squaredMeters} onChange={(e) => setSquaredMeters(e.target.value)}  placeholder="enter meters squared..." />
                </div>
                

                <h4 className="output-reference"><b>Tonnes:</b></h4>
                <div className="output">{tonnes + 0}</div>

            </form>

           
        <div>
            <Button variant="outline-primary" size="lg" className="mb-2" onClick={addItem}>Add</Button>
            
            <ul>
                {items.map(item => (
                    <li key={item.id}>{item.value} <Button variant="outline-danger" size="sm" className="delete" onDoubleClick={() => deleteItem(item.id)}>Del</Button></li>
                    
                ))}
            </ul>

            <h4 className="output-reference"><b>Total Tonnage:</b></h4>
             <div className="output2">
                 <h3>{totalTonnage}</h3>
             </div>
                <h4 className="output-reference"><b>Estimated Cost:</b></h4>
             <div className="output2">
                ${totalTonnage.toPrecision(3) * 65} 
             </div>

             <div>
                 <Button variant="outline-warning" size="lg" className="reset" onDoubleClick={resetBtn}>Reset</Button>
             </div>

        </div>
        
            </div>
        )

    
    }
