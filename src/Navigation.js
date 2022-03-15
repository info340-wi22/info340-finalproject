import React from 'react';
import { NavLink } from 'react-router-dom';

export function Header() {
  return (
      <nav className="navbar navbar-expand justify-content-center ">
        <ul className="navbar-nav justify-content-center navbar-mobile">
          <li className="nav-item ">
            <NavLink className="nav-link" to='/'>Overview</NavLink>
          </li>
          <li className="nav-item ">
            <NavLink className="nav-link" to='/goals'>Goals</NavLink>
          </li>
          <li className="nav-item ">
            <NavLink className="nav-link" to='/check-in'>Check-in</NavLink>
          </li>
          <li className="nav-item ">
            <NavLink className="nav-link" to='/summary'>Summary</NavLink>
          </li>
        </ul>
      </nav>
  );
}

export function Footer() {
  return (
    <footer>
      <div className="footer-copyright text-center py-3">&copy; 2022 Copyright:
        <a href="https://github.com/info340-wi22/INFO340-finalproject"> The Zesty Zeniths</a>
      </div>
    </footer>
  );
}