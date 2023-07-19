import { styled } from 'styled-components';

export const StyledLogin = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 400px;
    height: 400px;
    border: 1px solid blue;
    border-radius: 5px;
  & img {
    width: 200px;
    height: 200px;
    margin-bottom: 10px;
  }
  & h1 {
    margin-bottom: 10px;
  }
  & input {
    border-radius: 3px;
    font-size: 20px;
    margin-bottom: 10px;
    padding-left: 5px;
  }
  & input:hover {
    border: 3px solid #03c503;    
  }

  & button:hover {
    transform: scale(1.2);
  }
`;
