import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <Link to="/">Главная</Link>
      <Link to="/heroes">Герои</Link>
      <Link to="/locations">Локации</Link>
      <Link to="/episodes">Эпизоды</Link>
    </nav>
  )
}

export default NavBar;
