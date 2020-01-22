import React from 'react';
import logo from './logo.svg';
import './styles.scss';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bienvenue sur Noteload !
        </p>
      </header>
    </div>
  );
}

export default Home;
