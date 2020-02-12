import React, { Component } from 'react';
import Button from '../../components/Button';
import './Home.scss';

class Home extends Component {
    render() {
        return (
            <div>
                <header>
                    <h1>Noteload</h1>
                    <p>Vos notes en temps réel !</p>
                    <Button link='/signup' text='Commencer' />
                </header>
                <main>
                    <h2>Fonctionnalités</h2>
                    <div className='content'>
                        <article>
                            <img src='/images/securite.svg' alt='Sécurisé' />
                            <h3>Sécurisé</h3>
                            <p>
                                Pas d'inquiétude, toutes vos données sont
                                chiffrés.
                            </p>
                        </article>
                        <article>
                            <img src='/images/rapide.svg' alt='Rapide' />
                            <h3>Instantané</h3>
                            <p>
                                3 minutes : c'est le temps moyen entre la mise à
                                jour d'une note et le moment où vous êtes
                                informé.
                            </p>
                        </article>
                        <article>
                            <img
                                src='/images/disponible-partout.svg'
                                alt='Disponible partout'
                            />
                            <h3>Disponible partout</h3>
                            <p>
                                Noteload est disponible sur le Web sur votre
                                ordinateur et téléphone.
                            </p>
                        </article>
                    </div>
                </main>
                <footer>
                    <p>&copy; Noteload 2020</p>
                </footer>
            </div>
        );
    }
}

export default Home;
