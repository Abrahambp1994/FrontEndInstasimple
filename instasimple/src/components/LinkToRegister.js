import { Link } from "react-router-dom";

export const LinkToRegister = () => {
  return (
    <section className="linktoregister">
      
      <Link to={"/register"}>Create account</Link>
    </section>
  );
};