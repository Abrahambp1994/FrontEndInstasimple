
import { useContext, useState } from "react";
import { logInUserService } from "../services/index";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useModal } from "../context/ModalContext";
import { RegisterUser } from "./RegisterUser";

export const LoginUser = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [,setModal] = useModal(false)

  const handleForm = async (e) => {
    e.preventDefault();
    setModal(false)
    try {

      const data = await logInUserService({ email, password });
      const token = `Bearer ${data}`;
      login(token);
      navigate("/");

    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <section className= "sectionForm">
      <h1>Login</h1>
      <form className="login" onSubmit={handleForm}>
        <fieldset>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="pass">Password</label>
          <input
            type="password"
            name="pass"
            id="pass"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </fieldset>

        <button>Login</button>
        {error ? <p>{error}</p> : null}
      </form>
      <div className='button' onClick={() => setModal(<RegisterUser/>)}>
                    <p><NavLink>Create account</NavLink></p>
                </div>
    </section>
  );
};
