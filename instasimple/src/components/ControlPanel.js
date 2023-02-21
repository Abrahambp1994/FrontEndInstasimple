import {Link} from "react-router-dom"

export const ControlPanel = () => {
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
  </>
    )
}