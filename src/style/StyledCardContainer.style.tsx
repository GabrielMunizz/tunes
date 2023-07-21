import { styled } from 'styled-components';

export const StyledCardContainer = styled.main`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;   
  align-items: center;
  width: 100%;   

  & section {
    display: flex;
    border-radius: 5px;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    text-align: center;
    margin: 10px;
    width: 300px;
    height: 300px;
    box-shadow: 2px 1px 10px 0 rgba(255, 251, 251, 0.2);    
    color: #fff;    
  }

  & section img {
    border: 1px solid #fff;
  }

  & section:hover{
    background-color: rgb(73, 52, 191);
  }
`;
