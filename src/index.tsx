import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Navbar from "./components/navbar";
import {
  AuthenticationProvider,
  oidcLog,
  InMemoryWebStorage,
} from "@axa-fr/react-oidc-context";
import configuration from "./oidc/configuration";
import Routes from "./Router";
import { BrowserRouter } from "react-router-dom";

const colors = {
  rfk: {
    orange: "#FD8200",
  },
};

const settings = {
  initalColorMode: "dark",
  useSystemColorMode: false,
};

const styles = {
  global: {
    "html, body": {
      backgroundColor: "white",
    },
  },
};

const theme = extendTheme({ settings, colors, styles });

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <AuthenticationProvider
        configuration={configuration}
        loggerLevel={oidcLog.DEBUG}
        isEnabled={true}
        UserStore={InMemoryWebStorage}
      >
        <BrowserRouter>
          <Navbar />
          <Routes />
        </BrowserRouter>
      </AuthenticationProvider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
