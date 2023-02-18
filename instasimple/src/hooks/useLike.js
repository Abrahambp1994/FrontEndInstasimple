import { useEffect, useState } from "react";
import { postLikeOrDislike } from "../services/index";
import { ReactComponent as dislike } from '../assets/svg/dislike.svg';
import { ReactComponent as islike } from '../assets/svg/islike.svg';


export const useLike = () => {
    

  useEffect(() => {
    const loadLiked = async () => {
      
        const data = await postLikeOrDislike()

        setLiked(data);
    }

    loadLiked();
  }, []);


  return (
    <button onClick={handleLikeClick}>
      {liked ? dislike : islike}
    </button>
  );
}
