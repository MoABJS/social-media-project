// import { doc, deleteDoc } from "firebase/firestore";
// import { db } from "../config/firebase";
// import { CgProfile } from "react-icons/cg";
// import { SlDislike } from "react-icons/sl";
// import { SlLike } from "react-icons/sl";
// import { RiDeleteBin7Line } from "react-icons/ri";
// import { Posts } from "../screens/Home";
// import { useState, useEffect } from "react";

// interface Props {
//   post: Posts;
// }

// const Post = (props: Props) => {
//   const { post } = props;
//   const [postInArr, setPostInArr] = useState([post])

// //   useEffect(() => {
// //     const q = query(collection(db, "posts"));
// //     const unsubscribe = onSnapshot(q, (snapshot) => {
// //       const updatedPosts = snapshot.docs.map((doc) => ({
// //         id: doc.id,
// //         ...doc.data(),
// //       })) as Posts[];

// //       // Update the state with the new posts data, including deletions
// //       setPostInArr(updatedPosts);
// //     });

// //     // Cleanup the listener when the component unmounts
// //     return () => unsubscribe();
// //   }, []);

//   const deletePost = async () => {
//     try {
//       await deleteDoc(doc(db, "posts", post.id));
//       setPostInArr(postInArr.filter(post => !post))
//       console.log("Post deleted");
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   const likePost = async () => {};

//   const disLikePost = async () => {};

//   return (
//     <div className="post">
//       <div className="header">
//         {post.photoLink == null ? (
//           <CgProfile style={{ width: "20", height: "20", margin: "0" }} />
//         ) : (
//           <img src={post.photoLink} width="20" height="20" />
//         )}
//         <p>{post.useremail}</p>
//       </div>
//       <div className="message">
//         <p>{post.writeup}</p>
//       </div>
//       <div className="footer">
//         <button onClick={likePost}>
//           <SlLike />
//         </button>
//         <button onClick={disLikePost}>
//           <SlDislike />
//         </button>
//         <button onClick={deletePost}>
//           <RiDeleteBin7Line />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Post;
