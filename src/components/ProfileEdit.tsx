import { useState, useEffect } from 'react';
import { RotatingLines } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';
import { getUser, updateUser } from '../services/userAPI';
import { UserType, InputTextType } from '../types';

const initialProfileValues = {
  name: '',
  email: '',
  image: '',
  description: '',
};

function ProfileEdit() {
  const [loadProfile, setLoadProfile] = useState<UserType>(initialProfileValues);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const isProfileValid = loadProfile.description.length > 0
                              && loadProfile.email.length > 0
                              && loadProfile.image.length > 0
                              && loadProfile.name.length > 0;

  useEffect(() => {
    const userResult = async () => {
      const userData = await getUser();
      setLoadProfile(userData);

      setLoading(false);
    };
    userResult();
  }, []);

  const handleChange = ({ target }: InputTextType) => {
    const { name, value } = target;
    setLoadProfile({
      ...loadProfile as UserType,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    setLoading(true);
    await updateUser(loadProfile as UserType);
    setLoading(false);
    navigate('/profile');
  };
  return (
    <section className="editArea">
      {loading && (
        <div className="profileLoad">
          <h1>Carregando...</h1>
          <br />
          <RotatingLines
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="1.0"
            width="96"
            visible
          />
        </div>
      )}
      {!loading && (
        <form className="form" onSubmit={ handleSubmit }>
          <div className="editNameContainer">
            <h3>Nome: </h3>
            <input
              data-testid="edit-input-name"
              name="name"
              type="text"
              value={ loadProfile?.name }
              onChange={ (event) => handleChange(event) }
            />
          </div>
          <div className="editEmailContainer">
            <h3>E-mail: </h3>
            <input
              data-testid="edit-input-email"
              name="email"
              type="text"
              value={ loadProfile?.email }
              onChange={ (event) => handleChange(event) }
            />
          </div>
          <div className="editImageContainer">
            <h3>URL da imagem: </h3>
            <input
              type="text"
              name="image"
              data-testid="edit-input-image"
              value={ loadProfile?.image }
              onChange={ (event) => handleChange(event) }
            />
          </div>
          <div className="editBioContainer">
            <h3>Descrição: </h3>
            <textarea
              name="description"
              data-testid="edit-input-description"
              value={ loadProfile?.description }
              cols={ 30 }
              rows={ 10 }
              onChange={ (event) => handleChange(event) }
            />
          </div>

          <button
            data-testid="edit-button-save"
            disabled={ !isProfileValid }
          >
            Salvar

          </button>

        </form>
      )}
    </section>
  );
}

export default ProfileEdit;
