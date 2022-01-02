import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

import './styles/global.css';
import './styles/pages/landing.css';

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
          <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
        </a>
      </div>
    </div>
  );
}

export default App;
