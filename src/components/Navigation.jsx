import React from 'react';
import { Link } from 'react-router-dom';
import './comp1.css';

const Navigation = () => (
  <div className="navigation">
    <nav className="nav">
      <div>
        <Link className="nav_link" to="/coaches">
          COACHES
        </Link>
      </div>

      <div>
        <Link className="nav_link" to="/home">
          HOME
        </Link>
      </div>
    </nav>
    <div className="social">
      <p>mobutu</p>
      <p>adoyo</p>
    </div>
  </div>
);

export default Navigation;
