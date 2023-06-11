import "./navbar.css"


function Navbar() {
  return (
    <nav className="navClass">
      <div className="divClass">
        <img src="./public/RRSystems.png" alt="RR Systems" style={{ height: "50px", width: "auto" }} />
        <a className="pages" href="/Home">Home</a>
        <a className="pages" href="/About">About</a>
        <a className="pages" href="/Contact">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;