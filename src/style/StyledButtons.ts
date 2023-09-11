import { styled } from 'styled-components';

export const StyledButton = styled.button`
  height: 40px;
  width: 90px;
  border: none;
  border-radius: 5px;
  font-size: 20px;
  background-color: #8a2be2;
  color: #fff;
  padding: 5px; 
  transition: ease 0.5s;
  box-shadow: 1px 1px 8px #000;

  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }

  &:disabled {
    background-color: #f80606;
    color: #888787;
    transform: scale(1.0);
  }

  @media (max-width: 1405px) {
    width: 70px;
    height: 30px;
    font-size: 17px;
  }

  @media (max-width: 760px) {
    width: 55px;
    height: 25px;
    font-size: 15px;
  }
`;
