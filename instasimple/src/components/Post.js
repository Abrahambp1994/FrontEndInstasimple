import { LikeButton } from "./LikeButton";
import {AuthContext} from "../context/AuthContext"
import { useContext } from "react";


export const Post = ({ post}) => {


  const { token} = useContext(AuthContext);

  return (
    <article className="post">
      <p>{post.name}</p>
      {post.image ? (
        <img
          src={`${process.env.REACT_APP_BACKEND}/uploads/posts/${post.image}`}
          alt={post.id} height={"250px"} width={"250px"}
        />
      ) : null} 
      <p>{post.description}</p>
     <LikeButton postId={post.id} token={token}/>
      <p>{post.creationDate}</p>
     
    </article>
  );
};
