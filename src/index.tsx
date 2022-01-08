import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Navbar from "./components/navbar";
import { AuthenticationProvider } from "@axa-fr/react-oidc-context";
import configuration from "./oidc/configuration";
import Routes from "./Router";
import { BrowserRouter } from "react-router-dom";
import NotAuthenticatedComponent from "./oidc/NotAuthenticatedComponent";
import NotAuthorizedComponent from "./oidc/NotAuthorizedComponent";
import AuthenticatingComponent from "./oidc/AuthenticatingComponent";

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
      <BrowserRouter>
        <AuthenticationProvider
          configuration={configuration}
          isEnabled={true}
          notAuthenticated={NotAuthenticatedComponent}
          notAuthorized={NotAuthorizedComponent}
          authenticating={AuthenticatingComponent}
        >
          <Navbar />
          <Routes />
        </AuthenticationProvider>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
//callbackComponentOverride={CustomCallback}
