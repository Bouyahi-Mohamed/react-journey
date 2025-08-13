import "../css/header.css";

import { Link } from "react-router-dom";
export default function HeaderPage() {
  return (
    <header className="header">
      <ul className="header-list">
        <li className="header-item">
          <Link to="/">
            <img
              src="https://reactjs.org/logo-og.png"
              alt="React Logo"
              className="header-logo"
            />
          </Link>
        </li>

        <li className="header-item">
          <Link to="/">Home</Link>
        </li>

        <li className="header-item">
          <Link to="/react">React</Link>
        </li>

        <li className="header-item">
          <Link to="/about">About</Link>
        </li>
      </ul>
    </header>
  );
}
