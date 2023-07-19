import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header data-testid="header-component">
      <h1>TrybeTunes</h1>
      <NavLink data-testid="link-to-search" to="/search">Search</NavLink>
      <NavLink data-testid="link-to-favorites" to="//favorites">Favoritos</NavLink>
      <NavLink data-testid="link-to-profile" to="/profile">Meu perfil</NavLink>
    </header>
  );
}

export default Header;
