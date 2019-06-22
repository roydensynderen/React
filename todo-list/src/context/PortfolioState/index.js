import React from 'react'

const { Consumer, Provider } = React.createContext()

export default class PortfolioState extends React.Component {
    constructor() {
        super()
        this.state = {
            stock: '',
            entry: '',
            exit: ''
        }
    }

    handleUpdate = (e, data)  => {
        e.preventDefault()
        this.setState({
            stock: data.stock,
            entry: data.entry,
            exit: data.exit
        })
        console.log(this.state.stock, this.state.entry, this.state.exit)
    }
    
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        return (
            <Provider value = {{
                ...this.state,
                handleUpdate: this.handleUpdate,
                handleChange: this.handleChange
            }}>
                { this.props.children }
            </Provider>
        )
    }
}

export const withPortfolioState = C => props => (
    <Consumer>
        { value => <C {...value} {...props} /> }
    </Consumer>
)