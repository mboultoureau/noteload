import React, { Component } from 'react';
import TextField from '../../components/TextField';
import Button from '../../components/Button';

import './Signup.scss';

class Signup extends Component {
    render() {
        return (
            <div className='Signup'>
                <h1>Inscription</h1>
                <p>
                    Votre identifiant et votre mot de passe doivent être les
                    mêmes que ceux sur l'ENT.
                </p>
                <form noValidate>
                    <TextField name='username' text="Nom d'utilisateur" />
                    <TextField
                        name='password'
                        text='Mot de passe'
                        type='password'
                    />
                    <TextField name='email' text='Adresse email' type='email' />
                    <Button text="S'inscrire" />
                </form>
            </div>
        );
    }
}

export default Signup;
