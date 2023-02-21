import "./Header.css";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

import { Link } from "react-router-dom";

export const Header = () => {
  const { user } = useContext(AuthContext);
    return (
      <header>
        <h1><Link to={"/"}>Instasimple</Link></h1>
        {user ? <p>{user.name}</p> : null}
        <p><Link to={"/login"}>Login</Link></p>
      </header>
    )
}