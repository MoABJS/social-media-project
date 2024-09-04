import { Link } from "react-router-dom";

const Home = () => {
    return ( 
        <div className="home">
            <h1>Welcome to dev Basit's Planet</h1>
            <h3>Already have an Account?</h3>
            <Link to="/sign-in"><button>Sign In Here</button></Link>
            <Link to="/sign-up">
            <h3>Click here to create an account...</h3>
            </Link>
        </div>
     );
}
 
export default Home;