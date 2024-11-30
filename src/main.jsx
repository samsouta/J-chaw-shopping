import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { createTheme, MantineProvider } from '@mantine/core';
import { NextUIProvider } from "@nextui-org/react";
import { Provider } from 'react-redux';
import { store } from './features/store.js';
import './index.css'
import '@mantine/core/styles.css';
import { StateContextProvider } from './contexts/stateContext.jsx';

const theme = createTheme({
  
});
import './App.css'
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={store} >
      <MantineProvider theme={theme} >
        <StateContextProvider>
            <NextUIProvider>
            <React.StrictMode>
                  <App />
            </React.StrictMode>
            </NextUIProvider>
        </StateContextProvider>
      </MantineProvider>
    </Provider>
  </BrowserRouter>,
)
