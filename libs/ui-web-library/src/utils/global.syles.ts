import { createGlobalStyle } from "styled-components";
import { IProps } from "../types/theme.types";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "SF Text";
    font-weight: 400;
    src: url("https://sf.abarba.me/SF-UI-Text-Regular.otf");
  }

  @font-face {
    font-family: "SF Text";
    font-weight: 600;
    src: url("https://sf.abarba.me/SF-UI-Text-Semibold.otf");
  }

  * {
    /* @TODO: Use a better reset */
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
  }

  html {
    background-color: ${({ theme }: IProps) => theme.bgColor.darkGray};
  }

  body {
    font-family: ${({ theme }: IProps) => theme.fontFamily.sanFrancisco};
  }
`;

export default GlobalStyle;
