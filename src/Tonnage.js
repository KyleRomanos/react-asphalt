import React, { useState, useEffect } from 'react';
import useLocalStorage from './UseLocalStorage';
import 'bootstrap/dist/css/bootstrap.min.css';
import  Button  from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup'
import Card from 'react-bootstrap/Card'

//use state
export default function Tonnage({metersSquared}) {

    const [asphaltHeight, setAsphaltHeight] = useState('');
    const [squaredMeters, setSquaredMeters] = useState('');
    const [tonnes, setTonnes] = useState([])
    const [items, setItems] = useLocalStorage("items", [])
    const [resetShow, setResetShow] = useState(false);
    const [asphaltType, setAsphaltType] = useState("65")
    const [wasteAllowance, setWasteAllowance] = useState("0.10")
    
   
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

useEffect(() => {
    setSquaredMeters(metersSquared)
}, [metersSquared])

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

// default type for asphalt selector
const defaultType = [
    {label: 'Default', value: '65'}
]


        return (
            <>
            <Form className="form">
                
            <Form.Group className="mb-3" controlId="height">
            <Form.Label>Height (mm)</Form.Label>
                <Form.Control type="number" className="input-class-lg" value={asphaltHeight} onChange={(e) => setAsphaltHeight(e.target.value)}  placeholder="Enter Height in millimeters..." required />
                </Form.Group>
               
                <Form.Group className="mb-3" controlId="squared-meters">
                <Form.Label>Meters Squared</Form.Label>
                <Form.Control type="string" className="input-class-lg" value={squaredMeters} onChange={(e) => setSquaredMeters(e.target.value)}  placeholder="Meters Sq." />
                </Form.Group>

                <Form.Group className="mb-3" controlId="asphalt-type" onChange={(e) => {
                    const asphaltType = e.target.value;
                    if (asphaltType !== null) {
                    setAsphaltType(asphaltType)   
                }}}>

             <Form.Label>Select Asphalt Type</Form.Label>
             
             <Form.Select >
                <option value="60">HL-1</option>
                <option value="60">HL-2</option>
                <option value ="65">HL-3</option>
                <option value="70">HL-3 Fine</option>
                <option value="65">HL-4</option>
                <option value="65">HL-5</option>
                <option value="65">HL-8</option>
             </Form.Select>

             <Form.Text className="text-muted">
      Select Asphalt Type to generate estimated cost
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="asphalt-waste" onChange={(e) => {
                    const asphaltWaste = e.target.value;
                    if (asphaltWaste !== null) {
                    setWasteAllowance(asphaltWaste)   
                }}}>   
                 <Form.Label>Select Waste Allowance Percentage</Form.Label>
                 <Form.Select>
                 {Array.from(Array(20).keys()).map((v) => {
                    return <option key={v} value={(v + 1) * 0.01}>{`${v + 1}%`}</option>
                    })}
             </Form.Select>
             <Form.Text className="text-muted">
                Select 10% if uncertain </Form.Text>
           </Form.Group>

           <Form.Group className="total-tonnage-output" controlId="tonnes-output">
                <Card border="primary">
                <Card.Header as="h3">Tonnes:</Card.Header>
                <Card.Body>
                <Card.Text as="h3" className="tonnes-output-num">{tonnes}</Card.Text>
                <Button variant="outline-primary" size="lg" className="add-btn" onClick={addItem}>Add</Button>
                </Card.Body>
                </Card>
                </Form.Group> 
          

            <Form.Group className="list" controlId="tonnes">
            <ListGroup>
                {items.map(item => (
                    <ListGroup.Item className="list-item" key={item.id}>{item.value.toPrecision(5)}
                  
        
                     <Button variant="outline-danger" size="sm" className="delete-btn" onClick={() => deleteItem(item.id)}>Del</Button>

                    
                    </ListGroup.Item> 
                )
                )}
               
            </ListGroup>
            </Form.Group>
                   
            <Form.Group className="total-tonnage-output" controlId="tonnes-output">
                <Card border="success">
                <Card.Header as="h2">Total Tonnage:</Card.Header>
                <Card.Body>
                 <Card.Text as="h3">{totalTonnage.toPrecision(5)}</Card.Text>
                </Card.Body>
                </Card>

                <Card className="waste-allowance" border="success">
             <Card.Header as="h3">Waste Allowance:</Card.Header>
             <Card.Body>
                <Card.Text as="h4">{(totalTonnage * wasteAllowance + totalTonnage).toPrecision(5)} Tonnes</Card.Text>
                </Card.Body>
                </Card>
               
                <Card border="success">
                <Card.Header as="h3">Estimated Cost:</Card.Header>
                <Card.Body>
                <Card.Text as="h4">${((totalTonnage * wasteAllowance + totalTonnage) * asphaltType).toPrecision(5)}</Card.Text>
             
             </Card.Body>
             </Card>
             </Form.Group>

                <Form.Group className="reset-btn" controlId="tonnes">
                 <Button variant="outline-warning" size="lg" className="reset" onClick={handleResetShow}>Reset</Button>
                </Form.Group>

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
          
            
       
        
        
            </Form>
            </>
        )

    
    }
