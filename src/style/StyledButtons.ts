import { styled } from 'styled-components';

export const StyledButton = styled.button`
  height: 40px;
  width: 90px;
  border-radius: 5px;
  font-size: 20px;
  background-color: #8a2be2;
;
  color: #fff;
  padding: 5px; 
  transition: ease 0.5s;

  &:disabled {
    background-color: #f80606;
    color: #888787;
  }
`;
