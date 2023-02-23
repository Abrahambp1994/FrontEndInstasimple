
import { useContext, useState } from "react";
import { logInUserService } from "../services/index";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { LinkToRegister } from "../components/LinkToRegister";

export const LoginUser = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleForm = async (e) => {
    e.preventDefault();

    try {
      const data = await logInUserService({ email, password });
      const token = `Bearer ${data}`;
      login(token);
      console.log(data);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <section>
      <h1>Login</h1>
      <form onSubmit={handleForm}>
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
      <LinkToRegister/>
    </section>
  );
};
