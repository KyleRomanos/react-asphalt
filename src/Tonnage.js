import React from 'react';
// import { render } from 'react-dom';

class Tonnage extends React.Component {
    constructor() {
        super();
        this.state={
            asphaltHeight: '',
            squaredMeters: '',
            tonnage: '',
            results: [],
            // totalTonnage: ''
            
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

        handleResults = (event) => {
            event.preventDefault();
            this.setState((previousState) => ({ ...previousState, results: this.state.result }))
        }

        handleTotalTonnage = (event) => {
            event.preventDefault();
            this.setState((previousState) => ({ ...previousState, totalTonnage: this.state.totalTonnage }))
        }

 

        render() {
        return (
            
            <div>
            <form>
                <div>

                <h4>Asphalt Height(mm)</h4>

                <input type="number" value={this.state.asphaltHeight} onChange={this.handleAsphaltHeight}  placeholder="enter height in mm..."/>

                <h4>Meters Squared</h4>

                <input type="number" value={this.state.squaredMeters} onChange={this.handleSquaredMeters}  placeholder="enter meters squared..."/>
                </div>
                
                <div>
                    <button onClick= {this.calculateTonnage} type="submit">Add</button>
                </div>
                <h4><b>Tonnes:</b></h4>

                {this.state.tonnage}

                {/* <button onClick={this.handleResults} type="submit">Add</button> */}

                <h5><b>Total Tonnage:</b></h5>

                <li>{this.state.results.push(parseFloat(this.state.tonnage))}</li>

                <h5><b>Estimated Cost:</b></h5>

            </form>
            </div>
        )
    
    }
}

 
export default Tonnage; 
