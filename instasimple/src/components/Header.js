import { LoginOrRegister } from "./LoginOrRegister";
import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <header>
      <h1>
        <Link to={"/"}>Instasimple</Link>
      </h1>
      <nav>
        <LoginOrRegister />
      </nav>
    </header>
  );
};
