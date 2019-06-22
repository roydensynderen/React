import React from 'react'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            color: 'rebeccapurple'
        }
    }

    componentDidMount() {
        window.addEventListener('keypress', (e) => {
            if (e.key === 'a') {
                this.setState({color: 'cornflowerblue'})
            }
        }) 
    }

    componentWillUnmount() {
        window.removeEventListener('keypress')
    }

    render() {
        return (
            // 2{} if you did not create a style component. const style = {}.
            <div style={{backgroundColor: this.state.color, color: 'white' }}>
                Hello
            </div>
        )
    }
}

export default App