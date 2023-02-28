import "./Post.css";

import { useContext } from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import usePosts from "../../hooks/usePosts";

export const Post = ({ post, posts, setPosts }) => {
  const { likePost } = usePosts();
  const { token, user } = useContext(AuthContext);

  const handleLike = async () => {
    const postId = post.id;
    const likeLike = { token, postId };
    // Obtenemos "liked" para saber si hemos creado o eliminado el like.
    const { liked } = await likePost(likeLike);
    // Obtenemos un nuevo array con todos los post del array de "posts" modificando unicamente el
    // post sobre el cual hemos dado like (o eliminado el like).
    const modifiedPosts = posts.map((currentPost) => {
      // Si el id del post actual coincide con el post que queremos moficiar...
      if (currentPost.id === postId) {
        // Cambiamos el valor de la propiedad "likes".
        if (liked) {
          currentPost.likes++;
        } else {
          currentPost.likes--;
        }
      }
      // Retornamos el post actual.
      return currentPost;
    });
    // Modificamos el array de posts para que se repinte el componente automticamente.
    setPosts([...modifiedPosts]);
  };

  return (
    <article className="post">
      <div className="post-header">
        <Link className="user-link" to={`/users/${post.userId}`}>
          {post.name}
        </Link>
        <p>{moment(post.creationDate).format("MMM d, YYYY")}</p>
      </div>
      <img
        src={`${process.env.REACT_APP_BACKEND}/uploads/${post.image}`}
        alt={post.id}
      />
      <div className="post-footer">
        <div className="post-like">
          <p>{post.likes} Likes</p>
          {user ? (
            <button
              onClick={() => {
                handleLike();
              }}
            >
              Like
            </button>
          ) : null}
        </div>
        <p className="post-description">{post.description}</p>
      </div>
    </article>
  );
};
