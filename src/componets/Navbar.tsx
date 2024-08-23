import { Link } from "react-router-dom"

const Navbar = () => {
    return ( 
        <div className="nav-bar">
            <div className="links">
<Link to="/">Home</Link>
<Link to="/">Sign In</Link>
<Link to="/">Sign Up</Link>
            </div>
            <button>Sign Out</button>
        </div>
     );
}
 
export default Navbar;