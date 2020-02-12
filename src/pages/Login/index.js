import React, { Component } from 'react';
import axios from 'axios';
import TextField from '../../components/TextField';
import Button from '../../components/Button';

import './Login.scss';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            loading: false,
            errors: {}
        };
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({
            loading: true
        });
        const userData = {
            email: this.state.email,
            password: this.state.password
        };
        axios
            .post('/login', userData)
            .then(res => {
                console.log(res.data);
                this.setState({
                    loading: false
                });
                this.props.history.push('/');
            })
            .catch(error => {
                this.setState({
                    errors: error.response.data,
                    loading: false
                });
            });
    };

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });

        console.log(this.state);
    };

    render() {
        const { loading, errors } = this.state;

        return (
            <div className='Login'>
                <h1>Connexion</h1>
                <form noValidate onSubmit={this.handleSubmit}>
                    <TextField
                        name='email'
                        text='Adresse email'
                        type='email'
                        onChange={this.handleChange}
                    />
                    <TextField
                        name='password'
                        text='Mot de passe'
                        type='password'
                        onChange={this.handleChange}
                    />
                    <Button type='submit' text='Se connecter' />
                </form>
            </div>
        );
    }
}

export default Login;
