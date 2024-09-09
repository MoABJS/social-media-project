import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../config/firebase";
import { signOut } from "firebase/auth";
import { CgProfile } from "react-icons/cg";
import "../App.css";

const Navbar = () => {
  const [user] = useAuthState(auth);

  const LogOut = async () => {
    signOut(auth);
    alert("User signed Out");
  };

  return (
    <div className="nav-bar">
      {user ? (
        <>
          <div className="links">
            <Link to="/">Home</Link>
            <Link to="/">Create Post</Link>
            <button onClick={LogOut}>Log Out</button>
          </div>
          <div className="profile">
          <p>{user?.email}</p>
          { (user.photoURL) == null ? <img src={user.photoURL || ''} width="60" height="60"/> :
          <CgProfile style={{width: "60", height: "60"}}/>}
          </div>
        </>
      ) : (
        <>
          <div className="links">
            <Link to="/">Home</Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
