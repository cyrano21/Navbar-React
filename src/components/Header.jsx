import Navbar from "./Navbar";
import "../assets/styles/header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <Navbar />
      <div className="header-links">
        <Link to="/">Home</Link>
        <Link to="/login">Connexion</Link>
      </div>
    </header>
  );
};

export default Header;
