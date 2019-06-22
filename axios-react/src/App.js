import React from 'react'
import axios from 'axios';
import Todo from './Todo.js';

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: []
        }
    }

    componentDidMount() {
        //response as param is considered best practice
        axios.get('https://api.vschool.io/ben/todo').then(response => {
            this.setState({todos: response.data})
        })
    }

    render() {
        return (
            <div>
                test
                <Todo info={this.state.todos} />
            </div>
        );
    }
}

export default App