import React, { useState, useEffect } from 'react';
import useLocalStorage from './UseLocalStorage';
import 'bootstrap/dist/css/bootstrap.min.css';
import  Button  from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'

//use state
export default function Tonnage() {

    const [asphaltHeight, setAsphaltHeight] = useState('');
    const [squaredMeters, setSquaredMeters] = useState('');
    const [tonnes, setTonnes] = useState([])
    const [items, setItems] = useLocalStorage("items", [])
    const [resetShow, setResetShow] = useState(false);
   
// Reset Button Modal functions
    const handleResetClose = () => setResetShow(false);
    const handleResetShow = () => setResetShow(true)
  
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

///total tonnage calculated from list above 
const totalTonnage = items.reduce((total, item) => {
    return (total + (item.value))
}, 0)



//delete item from list

const deleteItem = (id) => {
   const updatedItems = [...items].filter((item) => item.id !== id) 
   setItems([...updatedItems])
}

//ResetButton function 
const resetBtn = () => {
    localStorage.clear(); 
    window.location.reload();
}




        return (
            <>
            <div>
            <form>
                <div>

                <h4 className="input"><b>Height (mm)</b> <input type="number" className="input-class-lg" value={asphaltHeight} onChange={(e) => setAsphaltHeight(e.target.value)}  placeholder="enter height in mm..." required /></h4>

               

                <h4 className="input"><b>Meters Squared</b> <input type="number" className="input-class-lg" value={squaredMeters} onChange={(e) => setSquaredMeters(e.target.value)}  placeholder="enter meters squared..." /></h4>

               
                </div>
                

                <h4 className="output-reference"><b>Tonnes:</b></h4>
                <div className="output">{tonnes + 0}</div>

            </form>

           
        <div>
            <Button variant="outline-primary" size="lg" className="mb-2" onClick={addItem}>Add</Button>
            
            <ul>
                {items.map(item => (
                    <li key={item.id}>{item.value} <Button variant="outline-danger" size="sm" className="delete" onClick={() => deleteItem(item.id)}>Del</Button>

                    
                    </li>

                    
                    
                )
                
                )}

                    

                {/* //onDoubleClick={() => deleteItem(item.id)}// */}
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
              
                 <Button variant="outline-warning" size="lg" className="reset" onClick={handleResetShow}>Reset</Button>

                 <Modal
                 show={resetShow}
                 onHide={handleResetClose}
                 backdrop="static"
                 keyboard={false}
                 >

                     <Modal.Header className="modal-header">
                         <Modal.Title>Reset</Modal.Title>
                     </Modal.Header>
                     <Modal.Body className="modal-body">
                         Are you sure you want to reset calculator?
                     </Modal.Body>
                     <Modal.Footer className="modal-footer">
                         <Button className="cancel-btn" variant="outline-light" onClick={handleResetClose}>
                             Cancel
                         </Button>
                         <Button className="reset-reset-btn" variant="outline-warning" onClick={resetBtn}>
                             Reset
                         </Button>
                     </Modal.Footer>
                 </Modal>
             </div>
            
        </div>
        
            </div>
            </>
        )

    
    }
