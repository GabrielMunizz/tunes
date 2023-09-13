import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getUser } from '../services/userAPI';
import { UserType } from '../types';
import { StyledHeader } from '../style/StyledHeader';
import Loading from './Loading';

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
        <Loading />
      )}

      {!loading && (user?.name.length !== 0) && (

        <StyledHeader data-testid="header-component">
          <div className="titleContainer">
            <p>TrybeTunes</p>
          </div>
          <div className="navContainer">
            <div className="userNameContainer">
              <h3>Welcome: </h3>
              <h3 data-testid="header-user-name">
                {user?.name}
              </h3>
            </div>
            <div className="navlinkContainer">
              <NavLink
                className="searchLink"
                data-testid="link-to-search"
                to="/search"
              >
                Search

              </NavLink>
              <NavLink
                className="favLink"
                data-testid="link-to-favorites"
                to="/favorites"
              >
                Favorites

              </NavLink>
              <NavLink
                className="profileLink"
                data-testid="link-to-profile"
                to="/profile"
              >
                My profile

              </NavLink>
            </div>
          </div>
        </StyledHeader>
      )}

    </>
  );
}

export default Header;
