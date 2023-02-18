
import { ReactComponent as dislike } from '../assets/svg/dislike.svg';
import { ReactComponent as islike } from '../assets/svg/islike.svg';
export const Post = ({ post }) => {
  
  const [liked, setLiked] = useState(false);

  const handleLikeClick = () => {
    setLiked(!liked);
  };
  
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
      <button onClick={handleLikeClick}>
      {liked ? dislike : islike}
    </button>
      <p>{post.creationDate}</p>
     
    </article>
  );
};
