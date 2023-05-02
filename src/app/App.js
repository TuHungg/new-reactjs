import { ChakraProvider } from "@chakra-ui/react";
import React from "react";

import Routes from "routes";

import { AppStore, ConfigsStore } from "stores";
import { theme } from "theme/theme";

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <AppStore.Provider>
        <ConfigsStore.Provider>
          <Routes />
        </ConfigsStore.Provider>
      </AppStore.Provider>
    </ChakraProvider>
  );
};

export default App;
