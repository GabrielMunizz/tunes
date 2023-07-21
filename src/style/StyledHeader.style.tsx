import { styled } from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100px;
  margin: 20px 0px;
  position: relative;
  background-color: rgb(73, 52, 191);
  border-radius: 5px;
  box-shadow: 10px 15px 5px 0 rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(3px);
  

  & header::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    opacity: 0.5;
    border-radius: 5px;
    z-index: -1;
  }

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
