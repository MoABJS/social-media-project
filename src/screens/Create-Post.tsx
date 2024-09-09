import { useForm } from "react-hook-form";
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { collection, addDoc } from "firebase/firestore"
import { db, auth } from "../config/firebase"
import { useNavigate } from "react-router-dom"
import { useAuthState } from "react-firebase-hooks/auth"

const CreatePost = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    const schema = yup.object().shape({
        writeup: yup.string().required("Type in something and post"),
    })

    const { handleSubmit, register, formState: {errors}} = useForm({
        resolver: yupResolver(schema)
    })

    interface postData {
        writeup: string
    }


    const postsRef = collection(db, "posts")

    const submitPost = async (data: postData) => {
       try{
        await addDoc(postsRef, {
            writeup: data.writeup,
            useremail: user?.email,
            photoLink: user?.photoURL,
            userId: user?.uid,
        });
        navigate("/");
       } catch (err) {
        console.log(err)
       }
    }

    return ( 
        <div className="create-post">
            <h3>Write up something champ</h3>
            <form onSubmit={handleSubmit(submitPost)}>
                <textarea {...register("writeup")}></textarea>
                <p style={{color: "red"}}>{ errors.writeup?.message }</p>
                <button>Post</button>
            </form>
        </div>
     );
}
 
export default CreatePost;