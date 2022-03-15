import React from 'react';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <nav className="navbar navbar-expand justify-content-center">
      <ul className="navbar-nav justify-content-center">
        <li className="nav-item">
          <a className="nav-link" href='/'><Link to='/'>Overview</Link></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href='/goals'><Link to='/goals'>Goals</Link></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href='/check-in'><Link to='/check-in'>Check-in</Link></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href='/summary'><Link to='/summary'>Summary</Link></a>
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