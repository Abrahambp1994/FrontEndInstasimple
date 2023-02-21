import './Footer.css';

import { Link } from "react-router-dom"

export const Footer = () => {
    return (    
    <footer className='footer'>
      <Link to={"/"}>PublicFeed</Link>
      <Link to={"/posts"}>FilterResults</Link>
      <Link to={"/users/:id"}>UserProfile</Link>
    </footer>
    )
}