import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RotatingLines } from 'react-loader-spinner';
import { InputTextType } from '../types';
import { createUser } from '../services/userAPI';
import { StyledMain } from '../style/StyledMain.style';
import { StyledLogin } from '../style/StyledLogin.style';
import { StyledBlueButton } from '../style/StyledButtons.style';

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
    <StyledMain>
      {!loading && (
        <StyledLogin onSubmit={ handleSubmit }>
          <img src="src/images/headphone.png" alt="" />
          <h1>Login:</h1>
          <input
            value={ userName }
            name="login"
            type="text"
            data-testid="login-name-input"
            onChange={ handleChange }
            placeholder="Digite seu nome"
          />
          <br />
          <StyledBlueButton
            data-testid="login-submit-button"
            disabled={ userName.length < 3 }
          >
            Entrar

          </StyledBlueButton>
        </StyledLogin>

      )}
      {loading && (
        <>
          <h1>Carregando...</h1>
          <br />
          <RotatingLines
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="0.75"
            width="96"
            visible
          />

        </>
      )}
    </StyledMain>
  );
}

export default Login;
