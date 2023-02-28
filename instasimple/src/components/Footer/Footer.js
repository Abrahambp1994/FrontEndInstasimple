import "./Footer.css";

import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useModal } from "../../context/ModalContext";

import { NewPost } from "../../pages/NewPost/NewPost";

export const Footer = () => {
  const { user } = useContext(AuthContext);
  const [, setModal] = useModal();
  return (
    <footer className="footer">
      <Link to={"/"}>PublicFeed</Link>
      <Link to={"/filter"}>FilterResults</Link>
      {user ? (
        <div className="button" onClick={() => setModal(<NewPost />)}>
          <NavLink>Add Post</NavLink>
        </div>
      ) : null}
      {user ? <Link to={"/user"}>UserProfile</Link> : null}
    </footer>
  );
};
