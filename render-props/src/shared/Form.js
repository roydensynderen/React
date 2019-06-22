import React from 'react'

class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            inputs: props.inputs            
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(e) {
        const {name, value} = e.target;
        this.setState(prevState => {
            return {
                inputs: {
                    ...prevState.inputs,
                    [name]: value
                }
            }
        })
    }

    reset() {
        this.setState({ inputs: this.props.inputs });
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.submit(this.state.inputs);

    }

    render() {
        return (
            <div>
                {this.props.render({
                    inputs: this.state.inputs,
                    handleSubmit: this.handleSubmit,
                    handleChange: this.handleChange
                })}
            </div>
        )
    }
}

export default Form

// import React, { Component } from 'react';


// class Form extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             inputs: props.inputs
//         }
//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }
//     handleChange(e) {
//         const { name, value } = e.target;
//         this.setState(prevState => {
//             return {
//                 inputs: {
//                     ...prevState.inputs,
//                     [name]: value
//                 }
//             }
//         })
//     }
//     reset() {
//         this.setState({ inputs: this.props.inputs });
//     }
//     handleSubmit(e) {
//         e.preventDefault();
//         this.props.submit(this.state.inputs);
//         if(this.props.reset) this.reset();
//     }
//     render() {
//         return (
//             <div>
//                 {this.props.render({
//                     inputs: this.state.inputs,
//                     handleSubmit: this.handleSubmit,
//                     handleChange: this.handleChange
//                 })}
//             </div>
//         )
//     }
// }

// export default Form;