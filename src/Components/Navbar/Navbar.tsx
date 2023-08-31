import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <nav className="navClass">
      <div className="divClass">
        <img
          src="./public/RRSystems.png"
          alt="RR Systems"
          style={{ height: "50px", width: "auto" }}
        />
        <Link className="pages" to="/Home">
          Home
        </Link>
        <Link className="pages" to="/About">
          About
        </Link>
        <Link className="pages" to="/Contact">
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
