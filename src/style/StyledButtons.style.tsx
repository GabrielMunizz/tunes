import { styled } from 'styled-components';

export const StyledBlueButton = styled.button`
  height: 35px;
  width: 90px;
  border-radius: 5px;
  font-size: 20px;
  background-color: #0979e8;
  color: #fff;
  padding: 5px; 
  transition: ease 0.5s;

  &:disabled {
    background-color: #f80606;
    color: #888787;
  }
`;
