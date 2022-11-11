import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import rootReducer from "./reducer";
import App from "./App";
import "./index.css";
// import reportWebVitals from './reportWebVitals';

const GlobalStyle = createGlobalStyle`
  *,
  *::before, 
  *::after {
    box-sizing: border-box;
  }

  body {
    background-image: url("/images/background.png");
    background-color: beige;
    background-size: cover;
    backdrop-filter: blur(4px);
  }
`;

const store = configureStore(
  { 
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
  }
);

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <GlobalStyle />
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
