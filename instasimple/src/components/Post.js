export const Post = ({ post }) => {
  
  
  return (
    <article className="post">
      <p>{post.name}</p>
      {post.image ? (
        <img
          src={`${process.env.REACT_APP_BACKEND}/uploads/posts/${post.image}`}
          alt={post.id}
        />
      ) : null} 
      <p>{post.description}</p>
      <p>{post.creationDate}</p>
     
    </article>
  );
};
