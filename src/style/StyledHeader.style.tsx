import { styled } from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 20px 0px;
  & .titleContainer {
    text-align: center;
    width: 70%;
    font-size: 32px;
  }

  & .titleContainer h1 {
    margin-left: 25%;
    color: #fff;
  }

  & .userNameContainer {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 25%;
    font-size: 25px;
    color: #fff;
  }
`;
