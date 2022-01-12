import React from 'react';
// import { render } from 'react-dom';

class Tonnage extends React.Component {
    constructor() {
        super();
        this.state={
            asphaltHeight: '',
            squaredMeters: '',
            tonnage: ''
        }
    }

        handleAsphaltHeight = (event) => {
            this.setState({
                asphaltHeight: event.target.value,
            })
        }

        handleSquaredMeters = (event) => {
            this.setState({
                squaredMeters: event.target.value,
            })
        }

        calculateTonnage = (event) => {
            event.preventDefault();
            this.setState({tonnage: parseFloat(0.000246).toPrecision(3) * (this.state.asphaltHeight) * 10 * parseInt(this.state.squaredMeters)})
        }

        render() {
        return (
            
            <div>
            <form onSubmit={this.calculateTonnage}>
                <div>
                <h4>Asphalt Height(mm)</h4>
                <input type="number" value={this.state.asphaltHeight} onChange={this.handleAsphaltHeight}  placeholder="enter height in mm..."/>
                <h4>Meters Squared</h4>
                <input type="number" value={this.state.squaredMeters} onChange={this.handleSquaredMeters}  placeholder="enter meters squared..."/>
                </div>
                
                <div>
                    <button type="submit">Add</button>
                </div>
                <h4><b>Tonnage:</b></h4>
                {this.state.tonnage}
            </form>
            </div>
        )
    
    }
}

 
export default Tonnage; 
