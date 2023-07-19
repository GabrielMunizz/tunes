import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { RotatingLines } from 'react-loader-spinner';
import { getUser } from '../services/userAPI';
import { UserType } from '../types';

function Header() {
  const [user, setUser] = useState<UserType>();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const catchUser = async () => {
      const data = await getUser();
      setUser(data);
      setLoading(false);
    };
    catchUser();
  }, []);
  return (
    <>
      {loading && (
        <div>
          <h1>Carregando...</h1>
          <RotatingLines
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="1.75"
            width="96"
            visible
          />

        </div>
      )}

      {!loading && (user?.name.length !== 0) && (

        <header data-testid="header-component">
          <h1>TrybeTunes</h1>
          <p data-testid="header-user-name">
            Welcome:
            {' '}
            {user?.name}
          </p>
          <NavLink data-testid="link-to-search" to="/search">Search</NavLink>
          <NavLink data-testid="link-to-favorites" to="/favorites">Favoritos</NavLink>
          <NavLink data-testid="link-to-profile" to="/profile">Meu perfil</NavLink>
        </header>
      )}

    </>
  );
}

export default Header;
