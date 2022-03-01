import React from 'react';

export function Header() {
  return (
    <nav className="navbar navbar-expand justify-content-center">
      <ul className="navbar-nav justify-content-center">
        <li className="nav-item">
          <a className="nav-link" href='/'>Overview</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href='/goals'>Goals</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href='/check-in'>Check-in</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href='/summary'>Summary</a>
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