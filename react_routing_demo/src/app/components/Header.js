import React from "react";
import {Link} from "react-router-dom";

export const Header = () => (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active"><Link style={{color:"red"}} className="nav-link" to='/'>Home</Link></li>
          <li className="nav-item"><Link style={{color:"green"}} className="nav-link" to='/roster'>Roster</Link></li>
          <li className="nav-item"><Link style={{color:"white"}} className="nav-link" to='/schedule'>Schedule</Link></li>
        </ul>
      </nav>
    </header>
  ) 