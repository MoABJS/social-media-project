import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";

type FormData = {
  email: string;
  password: string;
};

const schema = yup.object().shape({
  email: yup.string().email().required("Email is required"),
  password: yup.string().min(5).max(20).required("Password is required"),
});

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();

  const handleFormSubmission = async (data: FormData) => {
    const { email, password } = data;
    try {
     const user =  await createUserWithEmailAndPassword(auth, email, password);
          console.log(user);
          navigate("/");
        }
    catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="sign-up">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit(handleFormSubmission)}>
        <input
          type="email"
          placeholder="Email Here..."
          {...register("email")}
        />
        {errors && <p style={{ color: "red" }}>{errors.email?.message}</p>}
        <input
          type="password"
          placeholder="Password Here..."
          {...register("password")}
        />
        {errors && <p style={{ color: "red" }}>{errors.password?.message}</p>}
        <button>Sign Up</button>
      </form>
      <Link to="/sign-in">
        Sign In
      </Link>
    </div>
  );
};

export default SignUp;
