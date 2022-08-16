import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducer";
// import reportWebVitals from './reportWebVitals';

const GlobalStyle = createGlobalStyle`
  *,
  *::before, 
  *::after {
    box-sizing: border-box;
  }

  html, body {
    background-image: url("/images/background.png");
    background-color: beige;
    background-size: cover;
    backdrop-filter: blur(4px);
    font-family: BlinkMacSystemFont,-apple-system,"Segoe UI",Roboto,Oxygen,
      Ubuntu,Cantarell,"Fira Sans","Droid Sans","Helvetica Neue",Helvetica,
      Arial,sans-serif;
    width: 100vw;
    height: 100vh;
    margin: 0;
    overflow: hidden;
  }

  /* --- Animation Keyframes --- */

  @keyframes expand {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }

  @keyframes appear {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes hoverIn {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(.8);
    }
  }

  @keyframes hoverOut {
    0% {
      transform: scale(.8);
    }
    100% {
      transform: scale(1);
    }
  }
`;

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));

const store = createStore(rootReducer, composedEnhancer);

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
