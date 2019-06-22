import React from 'react'
import Header from './Header'
import axios from 'axios'
import HitList from './HitList'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            hitlist: []
        }
    }

    componentDidMount() {
        axios.get('http://api.vschool.io:6543/hitlist.json').then(response => {
            this.setState({hitlist: response.data})
        })
    }

    render() {
        return (
            <div>
                <Header />
                <HitList info={this.state.hitlist} />
            </div>
        )
    }
}

export default App