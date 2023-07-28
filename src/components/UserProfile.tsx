import { Link } from 'react-router-dom';
import { UserType } from '../types';

type UserProfileType = {
  loggedUser: UserType;
};

function UserProfile({ loggedUser }: UserProfileType) {
  const { description, email, image, name } = loggedUser;
  return (
    <section className="profileContainer">
      <div className="imageAndInfoContainer">
        <div className="imageContainer">
          <img
            data-testid="profile-image"
            className="profileImage"
            src={ image }
            alt="imagem do usuario"
          />
        </div>
        <div className="userInfo">
          <div className="nameContainer">
            <h3>Nome:</h3>
            <p className="profileName">{name}</p>
          </div>
          <div className="emailContainer">
            <h3>E-mail:</h3>
            <p className="profileEmail">{email}</p>
          </div>
        </div>
      </div>
      <div className="bioContainer">
        <h3>Descrição:</h3>
        <p className="profileBio">{description}</p>
      </div>
      <Link className="editProfileBtn" to="/profile/edit">Editar perfil</Link>
    </section>
  );
}

export default UserProfile;
