import React from "react";
import { ThemeProvider } from "styled-components";

import { IUIProviderProps } from "./UIProvider.types";
import * as themes from "../../themes";
import GlobalStyle from "../../utils/global.syles";

function UIProvider({ children, theme = "light" }: IUIProviderProps) {
  return (
    <ThemeProvider theme={themes[`${theme}Theme`]}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}

export default UIProvider;
