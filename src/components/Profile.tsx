import { useEffect, useState } from 'react';
import { getUser } from '../services/userAPI';
import { UserType } from '../types';
import { StyledMain } from '../style/StyledMain';
import UserProfile from './UserProfile';
import Loading from './Loading';

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
        <Loading />
      )}
      {!loading && (
        <UserProfile loggedUser={ loggedUser as UserType } />
      )}
    </StyledMain>
  );
}

export default Profile;
