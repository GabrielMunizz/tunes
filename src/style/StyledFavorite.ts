import { styled } from 'styled-components';

export const StyledFavorites = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 800px;
  color: #fff;
  margin: 5px;
  & input {
    width: 0;
    margin-left: 10px;
  }
  .inputContainer {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media(max-width: 865px) {
    width: 420px;
    font-size: 15px; 
  }

  @media(max-width: 445px) {
    width: 100%;
    font-size: 15px; 
  }

  @media(max-width: 325px) {
    width: 100%;
    font-size: 15px;
    text-align: left; 
  }
`;
