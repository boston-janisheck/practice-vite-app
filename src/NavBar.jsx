// import React from 'react';
import "./App.css";

const NavBar = () => {
  return (
    <nav>
      <ul className="navbar-menu navbar-menu-left">
        <li>
          <a href="/linkedin">LinkedIn</a>
        </li>
        <li>
          <a href="/github">GitHub</a>
        </li>
      </ul>
      <div className="navbar-title">Fancy Counter</div>
      <ul className="navbar-menu navbar-menu-right">
        <li>
          <a href="/email">Email</a>
        </li>
        <li>
          <a href="/website">Website</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
