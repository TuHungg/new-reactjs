import { extendTheme } from "@chakra-ui/react";

import { breakpoints } from "./foundations/breakpoints";

import { globalStyles } from "./styles";
import { config } from "./config";

import { buttonStyles } from "./components/button";

export const theme = extendTheme(
  { breakpoints },
  { config },
  globalStyles,

  buttonStyles
);
