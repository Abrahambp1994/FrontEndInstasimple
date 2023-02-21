import "./Post.css";

import { Link } from 'react-router-dom';

import { useState } from 'react';

export const Post = ({ post }) => {
  
  const [like, setLike] = useState(0);

  const handleLike = () => {
    setLike(like + 1);
  };
  
  return (
    <article className="post">

      <Link className="user-link" to={`/users/${post.userId}`}>{post.name}</Link>

      {post.image ? (
        <img
          src={`${process.env.REACT_APP_BACKEND}/uploads/${post.image}`}
          alt={post.id}
        />
      ) : null}

      <p>{post.description}</p>
      
      <p>{new Date(post.creationDate).toLocaleDateString(navigator.language, {hour: '2-digit', minute:'2-digit'})}</p>

      <button onClick={handleLike}>Like</button>
      <p>{like}</p>
     
    </article>
  );
};
