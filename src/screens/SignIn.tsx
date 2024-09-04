import { FcGoogle } from "react-icons/fc";
import { RiLoginBoxLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

type FormData = {
  email: string;
  password: string;
};

const schema = yup.object({
  email: yup.string().email().required("Email is required"),
  password: yup.string().min(5).max(20).required("Password is required"),
});

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const handleFormSubmission = (data: FormData) => {
    console.log(data);
  };

  return (
    <div className="sign-in">
      <h2>
        Sign In <RiLoginBoxLine style={{ marginLeft: "5px" }} />
      </h2>
      <form onSubmit={handleSubmit(handleFormSubmission)}>
        <input
          type="email"
          placeholder="Email Here..."
          {...register("email")}
        />
        {errors && <p>{errors.email?.message}</p>}
        <input
          type="password"
          placeholder="Password Here..."
          {...register("password")}
        />
        {errors && <p>{errors.password?.message}</p>}
        <button>Sign In</button>
      </form>
      <button className="signInWithGoogleBtn">
        Sign In With Google <FcGoogle style={{ marginLeft: "5px" }} />
      </button>

      <Link to="/sign-up">Don't have an account? Sign Up</Link>
    </div>
  );
};

export default SignIn;
