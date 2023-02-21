import { useEffect, useState } from "react";
import { getAllPostsService } from "../services/index";

const usePosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const loadPosts = async () => {
      
        const data = await getAllPostsService()

        setPosts(data);
    }

    loadPosts();
  }, []);



  return { posts };
};

export default usePosts;
