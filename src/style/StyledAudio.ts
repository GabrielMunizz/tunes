import { styled } from 'styled-components';

export const StyledAudio = styled.audio`
width: 250px;
height: 40px;

@media (max-width: 865px) {
  width: 180px;
  height: 32px;
}

@media (max-width: 445px) {
  width: 140px;
  height: 28px;  
}

@media(max-width: 325px) {
  width: 100px;
  height: 26px; 
  }
`;
