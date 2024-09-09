import { Link } from "react-router-dom";
import { auth } from "../config/firebase"
import { useAuthState } from "react-firebase-hooks/auth"

const Home = () => {

    const [user] = useAuthState(auth);

    return ( 
        <div className="home">
            { user? <h1>Welcome {user.email}</h1> : <><h1>Welcome to dev Basit's Planet</h1>
            <h3>Already have an Account?</h3>
            <Link to="/sign-in"><button>Sign In Here</button></Link>
            <Link to="/sign-up">
            <h3>Click here to create an account...</h3>
            </Link></>  }

        </div>
     );
}
 
export default Home;