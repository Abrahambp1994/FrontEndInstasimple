import "./PublicFeed.css";

import usePosts from "../../hooks/usePosts";

import { PostList } from "../../components/PostList/PostList.js";

export const PublicFeed = () => {
  
  const { posts } = usePosts();

  return (
    <section className="public-feed">
      <h2>Latest posts</h2>
      <PostList posts={posts} /> 
    </section>
  );
};