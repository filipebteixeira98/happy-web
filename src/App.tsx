import React from 'react';

import './styles/global.css';

import logoImg from './images/logo.svg';

function App() {
  return (
    <div id="page-landing">
      <div className="content-wrapper">
        <img src={logoImg} alt="Happy" />
        <main>
          <h1>Bring happiness to the world</h1>
          <p>Visit orphanages and change the day of many children.</p>
        </main>
        <div className="location">
          <strong>Salvador</strong>
          <span>Bahia</span>
        </div>
        <a href="#app" className="enter-app">
          {`>`}
        </a>
      </div>
    </div>
  );
}

export default App;
