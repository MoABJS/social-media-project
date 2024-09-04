import { Link } from "react-router-dom";
import "../App.css"

const Navbar = () => {
  return (
    <div className="nav-bar">
      <div className="links">
        <Link to="/">Home</Link>
      </div>
      {/* <button>Sign Out</button> */}
    </div>
  );
};

export default Navbar;
