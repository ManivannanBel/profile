import React from "react";

//import '../css/main.css';

function Header() {
  return (
    <React.Fragment>
      <header>
        <div className="menu-btn">
          <div className="btn-line"></div>
          <div className="btn-line"></div>
          <div className="btn-line"></div>
        </div>

        <nav className="menu">
          <div className="menu-branding">
            <div className="portrait"></div>
          </div>
          <ul className="menu-nav">
            <li className="nav-item">
              <a href="" className="nav-link">
                HOME
              </a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link">
                ABOUT ME
              </a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link">
                MY WORK
              </a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link">
                HOW TO REACH ME
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </React.Fragment>
  );
}

export default Header;
