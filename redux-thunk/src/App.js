import React from 'react'
import { connect } from 'react-redux'
import { getTodos, addTodo } from './redux'
import Todo from './Todo'

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            title: '',
            description: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.setState = {
            title: this.state.title,
            description: this.state.description
        }
        this.props.addTodo( this.state );
    }

    componentDidMount() {
        this.props.getTodos()
    }

    render() {
        return (
            <div>
                <form onSubmit={ this.handleSubmit }>
                    <input type="text" value={ this.state.title } name='title' onChange={ this.handleChange } placeholder="Enter Title"/>
                    <input type="text" value={ this.state.description } name='description' onChange={ this.handleChange } placeholder="Enter description"/>
                    <button>Submit</button>
                </form>
                <h1>Todos</h1>
                { this.props.todos.map(todo => {
                    return (<Todo {...todo} />)
                    })
                }
            </div>
        )
    }
}

export default connect(state => state, { getTodos, addTodo })(App)