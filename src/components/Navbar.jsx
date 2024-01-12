import { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/styles/navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div
        className={`burger-menu ${isOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <div className={`bar1 ${isOpen ? "change" : ""}`}></div>
        <div className={`bar2 ${isOpen ? "change" : ""}`}></div>
        <div className={`bar3 ${isOpen ? "change" : ""}`}></div>
      </div>

      <div className={`nav-menu ${isOpen ? "open" : ""}`}>
        <ul>
          <li>
            <Link to="/" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/login" onClick={toggleMenu}>
              Connexion
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
