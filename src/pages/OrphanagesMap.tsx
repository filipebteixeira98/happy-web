import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';

import mapMarkerImg from '../images/map-marker.svg';

function OrphanagesMap() {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkerImg} alt="Happy" />
          <h2>Choose an orphanage on map</h2>
          <p>Don't let beautiful kids waiting for you :)</p>
        </header>
        <footer>
          <strong>Salvador</strong>
          <span>Bahia</span>
        </footer>
      </aside>
      <div></div>
      <Link to="" className="create-orphanage">
        <FiPlus size={32} color="#fff" />
      </Link>
    </div>
  );
}

export default OrphanagesMap;
