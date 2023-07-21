import { styled } from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;  
  justify-content: center;
  width: 100%;
  height: 100px;
  margin: 20px 0px;
  background-color: rgb(73, 52, 191);
  border-radius: 5px;
  box-shadow: 10px 15px 5px 0 rgba(0, 0, 0, 0.2);
 
 & .titleContainer {
  text-align: center;
  width: 70%;
  font-size: 70px;  
}
    
  & .titleContainer p {
    margin-left: 25%;
    color: #fff;
    font-family: 'Monoton', cursive;
  }

  & .userNameContainer {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 25%;
    font-size: 25px;
    color: #fff;
    font-family: 'Architects Daughter', cursive;
  }
`;
