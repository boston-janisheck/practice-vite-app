// import React from 'react';
import "./App.css";

const NavBar = () => {
  return (
    <nav>
      <ul className="navbar-menu">
        <li>
          <a href="https://www.linkedin.com/in/boston-janisheck/">
            <img src="src/assets/linkedin.png" alt="LinkedIn" />
          </a>
        </li>
        <li>
          <a href="https://github.com/boston-janisheck">
            <img src="src/assets/github.png" alt="GitHub" />
          </a>
        </li>
        <div className="navbar-title">Fancy Counter</div>
        <li>
          <a href="mailto:bostonjanisheck@gmail.com">
            <img src="src/assets/email.png" alt="Email" />
          </a>
        </li>
        <li>
          <a href="/website">
            <img src="src/assets/web.png" alt="Personal Website Placeholder" />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
