import { useEffect, useState } from 'react';
import { RotatingLines } from 'react-loader-spinner';
import { getUser } from '../services/userAPI';
import { UserType } from '../types';
import { StyledMain } from '../style/StyledMain.style';
import UserProfile from './UserProfile';

function Profile() {
  const [loading, setLoading] = useState(true);
  const [loggedUser, setLoggedUser] = useState<UserType>();

  useEffect(() => {
    const userResult = async () => {
      const userData = await getUser();
      setLoggedUser(userData);
      setLoading(false);
    };
    userResult();
  }, []);

  return (
    <StyledMain>
      {loading && (
        <div className="userProfile">
          <h1>Carregando...</h1>
          <br />
          <RotatingLines
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="1.25"
            width="96"
            visible
          />
        </div>
      )}
      {!loading && (
        <UserProfile loggedUser={ loggedUser as UserType } />
      )}
    </StyledMain>
  );
}

export default Profile;
