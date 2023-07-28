import { useState, useEffect } from 'react';
import { RotatingLines } from 'react-loader-spinner';
import { getUser, updateUser } from '../services/userAPI';
import { UserType, InputTextType } from '../types';

function ProfileEdit() {
  const [loadProfile, setLoadProfile] = useState<UserType>();
  const [userImage, setUserImage] = useState('');
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const uploadProfile = async () => {
  //     const upData = await updateUser(editProfile as UserType);
  //   };
  //   uploadProfile();
  // }, []);

  useEffect(() => {
    const userResult = async () => {
      const userData = await getUser();
      setLoadProfile(userData);
      setLoading(false);
      console.log(userData);
    };
    userResult();
  }, []);

  function handleChange({ target }: InputTextType) {
    const { name, value } = target;
    setLoadProfile({
      ...loadProfile as UserType,
      [name]: value,
    });
  }

  // const handleImage = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const selectedImage = event.target.files[0];
  //   const reader = new FileReader();

  //   reader.onloadend = () => {
  //     setUserImage(reader.result as string);
  //   };
  //   if (selectedImage) {
  //     reader.readAsDataURL(selectedImage);
  //   }
  // };
  return (
    <>
      {loading && (
        <div>
          <h1>Carregando...</h1>
          <br />
          <RotatingLines
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="1.75"
            width="96"
            visible
          />
        </div>
      )}
      {!loading && (
        <form className="form">
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
            <input type="text" />
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

          <button data-testid="edit-button-save" disabled>Salvar</button>

        </form>
      )}
    </>
  );
}

export default ProfileEdit;
