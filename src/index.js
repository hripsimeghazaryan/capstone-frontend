import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
// import { ThemeProvider } from './contexts/theme-context';

ReactDOM.render(
  <BrowserRouter>
    {/* <ThemeProvider> */}
      <App />
    {/* </ThemeProvider> */}
  </BrowserRouter>,
  document.getElementById("root")
);
