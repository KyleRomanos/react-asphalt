import React from 'react';
// import { render } from 'react-dom';

class MetersSquared extends React.Component {
    constructor() {
        super();
        this.state={
            feetSquared: '',
            metersSquared: ''
        }
    }

        handleFeetSquared = (event) => {
            this.setState({
                feetSquared: event.target.value,
            })
        }

        calculateMetersSquared = (event) => {
            event.preventDefault();
            this.setState({metersSquared: parseInt(this.state.feetSquared) / 10.76})
           
        }

        render() {
        return (
            
            <div>
                <h3>Feet Squared</h3>
            <form onSubmit={this.calculateMetersSquared}>
                <div>
                <input type="number" value={this.state.length} onChange={this.handleLength} onChange={this.handleFeetSquared} placeholder="enter feet squared"/>
                </div>
                
                <div>
                    <button type="submit">Add</button>
                </div>
                <h4><b>Meters Squared:</b></h4>
                {this.state.metersSquared}
            </form>
            </div>
        )
    
    }
}

 
export default MetersSquared; 

// import React from 'react';


// class Calculation extends React.Component {
//     constructor() {
//         super();
//         this.state={
//             length: '',
//             width: '',
//             feetSquared: '',
//             metersSquared: ''
//         }
//     }

//     handleLength = (event) => {
//         this.setState({
//             length: event.target.value,
//         })
     
//     }


//     handleWidth = (event) => {
//         this.setState({
//             width: event.target.value
//         })
//     }

//     exe = (event) => {
//         event.preventDefault()
//         this.setState({feetSquared: parseInt(this.state.length) * parseInt(this.state.width)})

//         this.setState({metersSquared: parseInt(this.state.length) * parseInt(this.state.width) / 10.76})
//     }

//     render() {
//         return (
//             <div>
//                 <h1>Length</h1>
//                 <form onSubmit={this.exe}>
//                     <div>
//                     <input type="number" value={this.state.length} onChange={this.handleLength}/>
//                 </div>
//                 <div>
//                     <h1>Width</h1>
//                     <input type="number" value={this.state.width} onChange={this.handleWidth}/>
//                 </div>
//                 <div>
//                     <button type="submit">Add</button>
//                 </div>
//                 </form>
//                 <h4><b>Feet Squared:</b></h4>
//                 {this.state.feetSquared}
//                 <h4><b>Meters Squared:</b></h4>
//                 {this.state.metersSquared}
//             </div>
//         )
//     }
// }

// export default Calculation; 