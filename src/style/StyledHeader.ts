import { styled } from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;  
  justify-content: space-between;
  width: 100%;
  height: 100px;
  margin: 20px 0px;
  background-color: #4934bf;
  border-radius: 5px;
  box-shadow: 10px 15px 5px 0 rgba(0, 0, 0, 0.2);
 
 & .titleContainer {
  flex-grow: 1;
  transform: translate(16%);
}
    
  & .titleContainer p {
    text-align: center;
    font-size: 70px;  
    color: #fff;
    font-family: 'Monoton', cursive;    
  }

  & .userNameContainer {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  & .navContainer {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;    
    font-size: 25px;
    color: #fff;
    font-family: 'Architects Daughter', cursive;
    transform: translateX(-10%);
  }

  & .navContainer a {
    margin: 10px;
  }

  @media (max-width: 1405px) {
    .navContainer {
      flex-direction: column;
    }
  }
  @media (max-width: 1073px) {
    .titleContainer p {
      font-size: 50px;
    }
    .navContainer {
      font-size: 22px;
    }
  }
  @media (max-width: 865px) {
    .titleContainer p {
      font-size: 45px;
    }
    .navContainer {
      font-size: 18px;
    }
  }

  @media (max-width: 765px) {    
   height: 125px;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   padding-bottom: 10px;

    & .titleContainer {
      flex-grow: 0;
      transform: none;
    }
    & .navContainer {
      transform: none;    
    }
  }

  @media (max-width: 630px) {
    width: 100vw;
  }

  @media (max-width: 290px) {
    width: 100vw;    

    & .titleContainer p {
      font-size: 35px;
    }

    & .navContainer a {
    font-size: 15px;
  }
  }
`;
