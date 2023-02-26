import {LoginOrRegister} from "./LoginOrRegister"
import {Link} from "react-router-dom"
import DarkTheme from "./DarkTheme"
export const Header = () => {
    return (
        <header>
      <h1>
        <Link to={"/"}>Instasimple</Link>
      </h1>
      <nav>
        <LoginOrRegister />
      </nav>
      {/* <nav>
        <DarkTheme/>
      </nav> */}
    </header>
    )
}