import { Post } from "../Post/Post.js";  

// PROBLEMA RARO: por alguna razón, si no pongo el condicional {posts && post.map etc} no me lee los posts en la page de UserProfile

export const PostList = ({ posts }) => {

  return (
    <ul className="post-list">
      {posts && posts.map((post) => {
        return (
          <li key={post.id}>
            <Post post={post} />
          </li>
        )
      })}
    </ul>
  ) 
};

