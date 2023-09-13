import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUser, updateUser } from '../services/userAPI';
import { UserType, InputTextType } from '../types';
import { StyledButton } from '../style/StyledButtons';
import Loading from './Loading';

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
        <Loading />
      )}
      {!loading && (
        <form className="form" onSubmit={ handleSubmit }>
          <div className="editNameContainer">
            <h3>Name: </h3>
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
            <h3>Image URL: </h3>
            <input
              type="text"
              name="image"
              data-testid="edit-input-image"
              value={ loadProfile?.image }
              onChange={ (event) => handleChange(event) }
            />
          </div>
          <div className="editBioContainer">
            <h3>Tell about yourself: </h3>
            <textarea
              name="description"
              data-testid="edit-input-description"
              value={ loadProfile?.description }
              cols={ 30 }
              rows={ 10 }
              onChange={ (event) => handleChange(event) }
            />
          </div>

          <StyledButton
            data-testid="edit-button-save"
            disabled={ !isProfileValid }
          >
            Save

          </StyledButton>

        </form>
      )}
    </section>
  );
}

export default ProfileEdit;
