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
    height: 400px;
    box-shadow: 2px 1px 10px 0 rgba(255, 251, 251, 0.2);    
    color: #fff;    
    padding: 8px;
  }

  & section h2 {
    font-family: 'Architects Daughter', cursive;
    font-size: 21px;
    margin-bottom: -10px;
  }

  & section img {
    border: 1px solid #fff;
    width: 150px;
    height: 150px;
  }

  & section:hover{
    background-color: rgb(73, 52, 191);
    box-shadow: 2px 1px 10px 0 rgb(73, 52, 191)
  }
`;
