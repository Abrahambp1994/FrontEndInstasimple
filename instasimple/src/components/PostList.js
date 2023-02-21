import { Post } from "./Post";

export const PostList = ({ posts }) => {

  console.log("Posts", posts);
  return (
    <ul>
      {posts.map((post) => {
        return (
          <li key={post.id}>
            <Post post={post}  />
          </li>
        );
      })}
    </ul>
  ) 
};

