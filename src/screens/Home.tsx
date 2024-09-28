import { Link } from "react-router-dom";
import { auth, db } from "../config/firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore"
import { useEffect, useState } from "react"
import { CgProfile } from "react-icons/cg";
import { SlDislike } from "react-icons/sl";
import { SlLike } from "react-icons/sl";
import { RiDeleteBin7Line } from "react-icons/ri";
// import Post from "../components/Post";


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


    const deletePost = async (id: string) => {
      try {
        // const queryUserPosts = query(postsRef, where("userId", "==", userId))
        // const userPosts = await getDocs(queryUserPosts)
        // const postToDelete = userPosts.docs.filter((doc) => doc.id === id);
        // console.log(postToDelete)
        await deleteDoc(doc(db, "posts", id));
        setPostLists((prev) => prev && prev.filter((post) => post.id !== id))
      
        console.log("Post deleted");
      } catch (err) {
        console.error(err);
      }
    };
  
    // const likePost = async () => {};
  
    // const disLikePost = async () => {};
  
    useEffect(() => {
      const getPosts = async () => {
        const data = await getDocs(postsRef);
        setPostLists(
          data.docs.map((doc) => ({ ...doc.data(), id: doc.id })) as Posts[]
        );
      };

      getPosts();
    }, []);

    return ( 

        <div className="home">
            { user? <><h1>Welcome {user.email}</h1>
            { postLists?.map((post) =>
                //  <Post post={post} />
                <div className="post">
                <div className="header">
                  {post.photoLink == null ? (
                    <CgProfile style={{ width: "20", height: "20", margin: "0" }} />
                  ) : (
                    <img src={post.photoLink} width="20" height="20" />
                  )}
                  <p>{post.useremail}</p>
                </div>
                <div className="message">
                  <p>{post.writeup}</p>
                </div>
                <div className="footer">
                  <button >
                    <SlLike />
                  </button>
                  <button >
                    <SlDislike />
                  </button>
                  <button onClick={() => deletePost(post.id)}>
                    <RiDeleteBin7Line />
                  </button>
                </div>
              </div>
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