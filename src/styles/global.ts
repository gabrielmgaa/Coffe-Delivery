import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    font-size: 62.5%;
  }

  a{
    text-decoration: none;
  }

  body,input,button{
    font-size: 1.6rem;
    font-weight: 400;
    font-family: 'Roboto', sans-serif;
  }
`