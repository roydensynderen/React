import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Box from './Box.js';
import { Switch, Route } from 'react-router-dom';

const App = () => {
    return (
        <div>
            <Navbar />
            <Switch>
                <Route exact path='/' component={ Home } />
                <Route path='/about' component={ About } />
                <Route path='/contact' component={ Contact } />
                <Route path='/box' component={ Box } />
            </Switch>
        </div>
    )
}

export default App;