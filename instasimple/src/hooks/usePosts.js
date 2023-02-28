import { useEffect, useState } from "react";
import { getAllService, postLikeDislikeService } from "../services/index";

const usePosts = (searchResults) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const loadPosts = async () => {
      const data = await getAllService(searchResults);
      setPosts(data);
    };
    loadPosts();
  }, [searchResults]);

  const addPost = (data) => {
    setPosts([data, ...posts]);
  };

  const likePost = async (likeLike) => {
    return await postLikeDislikeService(likeLike);
  };

  return { posts, setPosts, addPost, likePost };
};

export default usePosts;
