import { FcGoogle } from "react-icons/fc";
import { RiLoginBoxLine } from "react-icons/ri";
import {Link} from "react-router-dom"

const SignIn = () => {
  return (
    <div className="sign-in">
            <h2>Sign In <RiLoginBoxLine style={{marginLeft: "5px"}}/></h2>
      <form>
        <input type="email" placeholder="Email Here..." />
        <input type="password" placeholder="Password Here..." />
        <button>Sign In</button>
      </form>
      <button className="signInWithGoogleBtn">Sign In With Google <FcGoogle style={{marginLeft: "5px"}}/></button>

      <Link to="/sign-up">Don't have an account? Sign Up</Link>
    </div>
  );
};

export default SignIn;
