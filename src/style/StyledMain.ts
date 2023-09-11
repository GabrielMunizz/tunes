import { styled } from 'styled-components';

export const StyledMain = styled.main`
  border-radius: 5px;
  width: 100%;  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 445px) {
  
    & .musicContainer {
      width: 100%;
    }
    & .musicContainer h1 {
    font-size: 20px;
  }

  & .musicContainer h2 {
    font-size: 15px;
  }
  }
 `;
