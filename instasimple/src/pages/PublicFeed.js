import usePosts from "../hooks/usePosts"
import { PostList } from "../components/PostList";

export const PublicFeed = () => {
  const { posts } = usePosts();

  return (
    <section>
      <h1>Latest posts</h1>
      <PostList posts={posts} /> 
    </section>
  );
};