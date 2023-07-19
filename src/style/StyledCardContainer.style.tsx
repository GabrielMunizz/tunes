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
    border: 1px solid #fff;    
    color: #fff;

    
  }
`;
