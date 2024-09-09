import { Link } from "react-router-dom";
import { auth, db } from "../config/firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import { collection, getDocs } from "firebase/firestore"
import { useEffect, useState } from "react"
import Post from "../components/Post";


export interface Posts {
    writeup: string;
    useremail: string;
    photoLink: string;
    userId: string;
    id: string;
  }

const Home = () => {

    const [user] = useAuthState(auth);

    const [postLists, setPostLists] = useState<Posts[] | null>(null);
    const postsRef = collection(db, "posts");
  
    const getPosts = async () => {
      const data = await getDocs(postsRef);
      setPostLists(
        data.docs.map((doc) => ({ ...doc.data(), id: doc.id })) as Posts[]
      );
    };
  
    useEffect(() => {
      getPosts();
    }, []);

    return ( 
        <div className="home">
            { user? <><h1>Welcome {user.email}</h1>
            { postLists?.map((post) =>
                 <Post post={post}/>
            )}
            </>


            : <><h1>Welcome to dev Basit's Planet</h1>
            <h3>Already have an Account?</h3>
            <Link to="/sign-in"><button>Sign In Here</button></Link>
            <Link to="/sign-up">
            <h3>Click here to create an account...</h3>
            </Link></>  }

        </div>
     );
}
 
export default Home;