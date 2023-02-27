import { NewPost } from "./NewPost"
import { Link, NavLink } from "react-router-dom";
import { useModal } from '../context/ModalContext';
import { HomeSvg } from "../assets/svg/HomeSvg";
import { ProfileSvg } from "../assets/svg/ProfileSvg";
import {AddPostSvg} from "../assets/svg/AddPostSvg"
export const ControlPanel = () => {
  const [, setModal] = useModal();

    return (    
        <>  
      <nav>
        <Link to={"/"}><HomeSvg/></Link>
      </nav>
      
    <nav>
    <Link to={"/users/:id"}><ProfileSvg/></Link>
  </nav>
  <div className='button' onClick={() => setModal(<NewPost/>)}>
                    <NavLink><AddPostSvg/></NavLink>
                </div>
  </>
    )
}