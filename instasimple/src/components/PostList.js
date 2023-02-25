import { Post } from "./Post";

export const PostList = ({ posts }) => {

  return (
    <ul>
      {posts.map((post) => {
        return (
          <li >
            <Post post={post} key={post.id} />
          </li>
        );
      })}
    </ul>
  ) 
};

