import { CgProfile } from "react-icons/cg";
import { Posts } from "../screens/Home";

interface Props {
    post: Posts;
}

const Post = (props: Props) => {
    const { post } = props;




  return (
    <div className="post">
      <div className="header">
        { (post.photoLink == null)? <CgProfile style={{width: "20", height: "20", margin: "0"}}/> : <img src={post.photoLink} width="20" height="20"/>}
        <p>{ post.useremail }</p>
      </div>
      <div className="message">
        <p>{ post.writeup }</p>
      </div>
    </div>
  );
};

export default Post;
