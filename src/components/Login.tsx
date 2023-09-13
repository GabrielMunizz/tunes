import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { InputTextType } from '../types';
import { createUser } from '../services/userAPI';
import { StyledLogin } from '../style/StyledLogin';
import { StyledButton } from '../style/StyledButtons';
import loginImage from '../images/headphoneColor.png';
import Loading from './Loading';

function Login() {
  // Cria states para guardar o username e condição de loading
  const [userName, setUserName] = useState<string>('');
  const [loading, setLoading] = useState(false);
  // hook para redirecionamento de rotas
  const navigate = useNavigate();
  // função para manipulação do input de texto.
  const handleChange = ({ target }: InputTextType) => {
    setUserName(target.value);
  };
  // função que, ao clicar no botão de login, aciona o state de loading
  // faz requisição na API com createUser e redireciona usuario para a rota '/search'.
  const handleSubmit = async () => {
    setLoading(true);
    await createUser({ name: userName });
    setLoading(false);
    navigate('/search');
  };

  return (
    <section className="loginContainer">
      {!loading && (
        <StyledLogin onSubmit={ handleSubmit }>
          <header className="loginHeader">
            <p>TrybeTunes</p>
          </header>
          <img src={ loginImage } alt="" />
          <h1>Login:</h1>
          <input
            value={ userName }
            name="login"
            type="text"
            data-testid="login-name-input"
            onChange={ handleChange }
            placeholder="Type your name"
          />
          <br />
          <StyledButton
            data-testid="login-submit-button"
            disabled={ userName.length < 3 }
          >
            Login

          </StyledButton>
        </StyledLogin>

      )}
      {loading && (
        <Loading />
      )}
    </section>
  );
}

export default Login;
