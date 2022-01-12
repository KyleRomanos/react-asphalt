import React from 'react';


class Calculation extends React.Component {
    constructor() {
        super();
        this.state={
            length: '',
            width: '',
            feetSquared: '',
            metersSquared: ''
        }
    }

    handleLength = (event) => {
        this.setState({
            length: event.target.value,
        })
     
    }


    handleWidth = (event) => {
        this.setState({
            width: event.target.value
        })
    }

    exe = (event) => {
        event.preventDefault()
        this.setState({feetSquared: parseInt(this.state.length) * parseInt(this.state.width)})

        this.setState({metersSquared: parseInt(this.state.length) * parseInt(this.state.width) / 10.76})
    }

    render() {
        return (
            <div>
                    <div>Triangle Measurement?
                    <input type="radio" value="No" name="gender" /> No
                    <input type="radio" value="Yes" name="gender" /> Yes
                    </div>
                    <div>
                    <select id="operator">
                      <option value="HL1">HL 1</option>
                      <option value="HL2">HL 2</option>
                      <option value="HL3">HL 3</option>
                      <option value="HL3Fine">HL 3 Fine</option>
                      <option value="HL4">HL 4</option>
                      <option value="HL4Fine">HL 4 Fine</option>
                      <option value="HL5">HL 5</option>
                      <option value="HL8">HL 8</option>Select Asphalt Type
                    </select>
                    </div>
                <h4>Length</h4>
                <form onSubmit={this.exe}>
                    <div>
                    <input type="number" value={this.state.length} onChange={this.handleLength} placeholder="enter length in ft..."/>
                {/* </div>
                <div> */}
                    <h4>Width</h4>
                    <input type="number" value={this.state.width} onChange={this.handleWidth} placeholder="enter width in ft..." />
                </div>
                <div>
                    <button type="submit">Add</button>
                </div>
                </form>
                <h4><b>Feet Squared:</b></h4>
                {this.state.feetSquared}
                <h4><b>Meters Squared:</b></h4>
                {this.state.metersSquared}
            </div>
        )
    }
}

export default Calculation; 