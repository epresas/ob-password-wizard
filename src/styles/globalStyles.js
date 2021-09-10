import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --color-primary: #FF0049;
    --color-secondary: #002B45;
    --color-secondary-medium: rgba(0, 43, 69, 0.5);
    --color-secondary-light: rgba(0, 43, 69, 0.2);
    --color-tertiary: #FFF1E5;
    --color-blue-primary: #40C3DF;
    --color-white: #FFFFFF;
    --color-black-pure: #000000;
    --color-grey: #ABABAB;
    --color-grey-light: #CCD5DA;
  }
  
  body {
    box-sizing: border-box;
    font-family: 'Quicksand', sans-serif;
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyle;
