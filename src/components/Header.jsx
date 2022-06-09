import React from "react";

function Header() {
  return (
    <header>
      <nav>
        <h1 className="logo">
          <a href="/">Students</a>
        </h1>
        <div className="nav-links">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="https://github.com/Kakedev21/studentProfile">
                Repository
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
