import { Link } from "react-router-dom";

export const LinkToLogin = () => {
  return (
    <section className="linktologin">
      
      <Link to={"/login"}>do you have an account? Log in</Link>
    </section>
  );
};