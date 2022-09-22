import { createGlobalStyle, css } from "styled-components";

const resetCss = css`
  body {
    margin: 0;
    padding: 0;
    font-family: "Roboto", sans-serif;
  }
`;

const GlobalStyle = createGlobalStyle`
  ${resetCss};
`;
export default GlobalStyle;
