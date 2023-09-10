import { styled } from 'styled-components';

export const StyledLogin = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 600px;
    height: 550px;    
    box-shadow: 2px 1px 10px 0 #4934bf;
    border-radius: 5px;

  & .loginHeader {
  display: flex;
  align-items: center;
  justify-content: center;  
  margin-bottom: 20px;
  width: 100%;
  height: 100px;
  background-color: #4934bf;
  border-radius: 5px;
  box-shadow: 10px 15px 5px 0 rgba(0, 0, 0, 0.2);
  color: #fff;
  font-size: 55px;
  font-family: 'Monoton', cursive;
}

  & img {
    width: 200px;
    height: 200px;
    margin-bottom: 10px;
  }
  & h1 {
    color: #fff;
    margin-bottom: 10px;
  }
  & input {
    border-radius: 3px;
    font-size: 25px;
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
