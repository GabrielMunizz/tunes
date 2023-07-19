import { styled } from 'styled-components';

export const StyledSearch = styled.form`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;  
  align-items: center;
  height: 200px;  
  width: 600px;  
  margin-top: 20px;

  & h2 {
    color: #fff;
    font-size: 40px;
  }

  & input {
    width: 500px;
    height: 35px;
    border-radius: 3px;
  }
`;
