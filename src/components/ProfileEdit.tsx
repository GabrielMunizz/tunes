import { useEffect, useState } from 'react';
import { getUser } from '../services/userAPI';
import { UserType } from '../types';

function ProfileEdit() {
  const [loggedUser, setLoggedUser] = useState<UserType>();

  useEffect(() => {
    const userResult = async () => {
      const userData = await getUser();
      setLoggedUser(userData);
    };
    userResult();
  }, []);
  return (
    <form>
      <div>
        <input
          data-testid="edit-input-name"
          name="nome"
          type="text"
        />
      </div>
      <div>
        <input
          data-testid="edit-input-email"
          name="email"
          type="text"
        />
      </div>
      <div>
        <textarea name="bio" id="" cols="30" rows="10" />
      </div>
      <div>
        <input
          data-testid="edit-input-image"
          type="image"
          src=""
          alt=""
        />
      </div>

      <button data-testid="edit-button-save" disabled>Salvar</button>

    </form>
  );
}

export default ProfileEdit;
