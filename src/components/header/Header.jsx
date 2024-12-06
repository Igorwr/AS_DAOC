import { NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <>
      <header className="container">x
        <div className="logo">Pagina Inicial</div>

        <nav className="navigation">
          <ul>
            <NavLink
              className={({ isActive }) => (isActive ? "qualquerCoisa" : "")}
              to={"/home"}
            >
              Home
            </NavLink>

            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to={"/cadastrar/produto"}
            >
              Cadastrar novo produto
            </NavLink>

            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to={"/sobre"}
            >
              Contato
            </NavLink>

            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to={"/produto"}
            >
              Produtos
            </NavLink>
          </ul>
        </nav>x
      </header>

    </>
  );
}

export default Header;
