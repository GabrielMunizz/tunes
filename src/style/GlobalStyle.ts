import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;     
  }
  html {
    width: 100vw;
    height: 100%;
  }
  body { 
      width: 100%;
      /* height: 100vh; */
      background: linear-gradient(to bottom, #0c1825, #001e32, #012345, #023456);
      background-size:cover;
      background-attachment: fixed;
    }
`;
