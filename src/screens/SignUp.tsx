import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="sign-up">
      <h2>Sign Up</h2>
      <form>
        <input type="email" placeholder="Email Here..." />
        <input type="password" placeholder="Password Here..." />
        <button>Sign Up</button>
      </form>
      <Link to="/sign-in"><h4>Sign In</h4></Link>
    </div>
  );
};

export default SignUp;
