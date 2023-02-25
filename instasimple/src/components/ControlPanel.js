import { NewPost } from "./NewPost"
import { Link, NavLink } from "react-router-dom";
import { useModal } from '../context/ModalContext';

export const ControlPanel = () => {
  const [, setModal] = useModal();

    return (    
        <>  
      <nav>
        <Link to={"/"}>PublicFeed</Link>
      </nav>
      <nav>
      <Link to={"/posts?description="}>FilterResults</Link>
    </nav>
    <nav>
    <Link to={"/users/:id"}>UserProfile</Link>
  </nav>
  <div className='button' onClick={() => setModal(<NewPost/>)}>
                    <NavLink>Add Post</NavLink>
                </div>
  </>
    )
}