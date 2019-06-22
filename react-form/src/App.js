import React from 'react';

class App extends React.Component {
    constructor() {
        super()

    this.state = {
        name: '',
        email: '',
        phone: '',
        country: '',
        message: ''

    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit(e) {
        e.preventDefault();
        alert('Your message has been sent successfully');
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Full name" value={this.state.name} name="name" onChange={this.handleChange} />
                <input placeholder="Email" value={this.state.email} name="email" onChange={this.handleChange} />
                <input type="number" placeholder="Phone number" value={this.state.phone} name="phone" onChange={this.handleChange} />
                <input type="text" placeholder="Country" value={this.state.country} name="country" onChange={this.handleChange} />
                <input placeholder="Message" value={this.state.message} name="message" onChange={this.handleChange} />
                <button>Send</button>
            </form>
        )
    }
}

export default App;



