import { Link } from "react-router-dom";
import logo from "../../assets/react.svg";
import { Nav } from "../Nav/nav.jsx";
import "./Header.css";

export const Header = () => {
  return (
    <header>
      <div className="logo-container">
        <Link to={"/"} aria-label="Ir al inicio">
          <img src={logo} alt="React Logo" />
          <span>Mang-ax</span>
        </Link>
      </div>
      <Nav />
    </header>
  );
};
