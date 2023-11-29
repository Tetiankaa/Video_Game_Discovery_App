import React from 'react';
import ReactDOM from 'react-dom/client';
import {ChakraProvider, ColorModeScript} from "@chakra-ui/react";

import './index.css';
import App from "./App";
import {theme} from "./theme";



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
        <App/>
    </ChakraProvider>

);
