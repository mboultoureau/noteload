import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';

import './App.scss';

class App extends Component {
    render() {
        return (
            <div className='App'>
                <Router>
                    <Navbar />
                    <div className='container'>
                        <Switch>
                            <Route exact path='/'>
                                <Home />
                            </Route>
                            <Route exact path='/login'>
                                <Login />
                            </Route>
                            <Route exact path='/signup'>
                                <Signup />
                            </Route>
                            <Route path='*'>
                                <Home />
                            </Route>
                        </Switch>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
