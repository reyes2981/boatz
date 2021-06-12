import React from "react";
import ReactDOM from "react-dom";
import App from "../components/App.js";
import "semantic-ui-css/semantic.min.css";
import { ChakraProvider } from "@chakra-ui/react";
document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <ChakraProvider>
      <App />
    </ChakraProvider>,
    document.body.appendChild(document.createElement("div"))
  );
});
