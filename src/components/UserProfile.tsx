import { Link } from 'react-router-dom';
import { UserType } from '../types';

type UserProfileType = {
  loggedUser: UserType;
};

function UserProfile({ loggedUser }: UserProfileType) {
  const { description, email, image, name } = loggedUser;
  return (
    <section>
      <div className="image&BtnContainer">
        <img
          data-testid="profile-image"
          className="profileImage"
          src={ image }
          alt="imagem do usuario"
        />
        <Link className="editProfileBtn" to="/profile/edit">Editar perfil</Link>
      </div>
      <div className="userInfo">
        <h3>Nome:</h3>
        <p className="profileName">{name}</p>
        <h3>E-mail:</h3>
        <p className="profileEmail">{email}</p>
        <h3>Descrição:</h3>
        <p className="profileBio">{description}</p>
      </div>
    </section>
  );
}

export default UserProfile;
