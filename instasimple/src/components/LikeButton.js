import { useState } from "react";
import { UnLikeSvg } from "../assets/svg/UnLikeSvg";
import {IsLikeSvg} from "../assets/svg/IsLikeSvg"
import { postLikeOrDislike } from "../services/index";


export const LikeButton = ({postId, token}) => {
    
  const [liked, setLiked] = useState(false);


  const handleLikeClick = () => {
    
    setLiked(!liked);

    postLikeOrDislike({postId, token})
  };

  return (
    <div onClick={handleLikeClick} className="buttonLike">
      {liked ? <div><IsLikeSvg /></div> : <div><UnLikeSvg /></div>}
    </div>
    
  );
}
