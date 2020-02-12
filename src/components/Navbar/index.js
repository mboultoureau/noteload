import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button';
import './Navbar.scss';

class Navbar extends Component {
    render() {
        return (
            <nav>
                <div className='left'>
                    <Link to='/' className='logo'>
                        Noteload
                    </Link>
                </div>
                <div className='right'>
                    <Link to='/login'>Connexion</Link>
                    <Button link='/signup' text='Démarrer' />
                </div>
            </nav>
        );
    }
}

export default Navbar;
