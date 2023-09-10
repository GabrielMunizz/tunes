import { styled } from 'styled-components';

export const StyledAudioContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 800px;
  color: #fff;
  margin: 5px;
  & input {
    width: 0;
    margin-left: 10px;
  }
  .inputContainer {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
