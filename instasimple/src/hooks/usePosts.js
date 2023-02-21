import { useEffect, useState } from "react";
import { getAllPostsService, getPostsByDescriptionService } from "../services/index";

const usePosts = (searchResults) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const loadPosts = async () => {
      
        const data = searchResults
        ? await getPostsByDescriptionService(searchResults)
        : await getAllPostsService();

        setPosts(data);
    }

    loadPosts();
  }, [searchResults]);



  return { posts };
};

export default usePosts;
