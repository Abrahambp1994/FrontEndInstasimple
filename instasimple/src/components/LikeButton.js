import { useState } from "react";
import { UnLike } from "../assets/svg/UnLike";
import { IsLike } from "../assets/svg/IsLike"
import { postLikeOrDislike } from "../services/index";


export const LikeButton = ({postId, token}) => {
    
  const [liked, setLiked] = useState(false);


  const handleLikeClick = () => {
    
    setLiked(!liked);

    postLikeOrDislike({postId, token})
  };

  return (
    <button onClick={handleLikeClick} >
      {liked ? <div><IsLike witdh= {24} height={24}/></div> : <div><UnLike witdh= {24} height={24}/></div>}
    </button>
    
  );
}
