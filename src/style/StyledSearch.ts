import { styled } from 'styled-components';

export const StyledSearch = styled.form`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  align-items: center;
  height: 200px;
  width: 600px;

  & h2 {
    color: #fff;    
    font-size: 40px;
    font-family: 'Architects Daughter', cursive;
  }

  & input {
    width: 500px;
    height: 35px;
    border-radius: 3px;
    margin-right: 10px;
  }

  @media (max-width: 1405px) {
    justify-content: center;

    & h2 {
      font-size: 28px;
    }

    & input {
      width: 400px;
      height: 30px;
      margin-right: 5px;
    }
  }

  @media (max-width: 610px) {
    width: 100%;
    flex-direction: column;
    justify-content: center;

    & h2 {
      font-size: 23px;
    }

    & input {
      width: 250px;
      height: 30px;
      margin-bottom: 5px;
    }
  }
`;
