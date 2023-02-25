import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useModal } from '../context/ModalContext';
import {LoginUser} from "./LoginUser";
import { RegisterUser } from "./RegisterUser";

export const LoginOrRegister = () => {
    const { user, logout } = useContext(AuthContext);
    const [, setModal] = useModal();

    return user ? (
      <section>
        Welcome to home <Link to={user.id}>{user.name}</Link>{" "}
        <button onClick={() => logout()}>Logout</button>
      </section>
    ) : (
      <ul>
        <nav>
                <div className='button' onClick={() => setModal(<LoginUser/>)}>
                    <NavLink>Login</NavLink>
                </div>
                <div className='button' onClick={() => setModal(<RegisterUser />)}>
                    <NavLink>Register</NavLink>
                </div>
            </nav>
      </ul>
    );
  };

