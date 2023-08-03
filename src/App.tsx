import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import "./App.css";
import { HomePage } from "./app/containers/homepage";
import { Routes, Route, Navigate } from "react-router-dom";
import { PrivacyPolicy } from "./app/containers/privacypolicy";
import { Terms } from "./app/containers/terms";
import { UnderConstruction } from "./app/containers/underconstruct";

const AppContainer = styled.div`
  ${tw`
    w-full
    h-full
    flex
    flex-col
    text-blacktext
  `};
`;

function App() {
  return (
  <AppContainer>
    <Routes>
      {/* Define routes for each page */}
      <Route path="/" exact element={<HomePage/>} />
      <Route path="/contact" exact element={ <Navigate to="/under-construction" /> }/>
      <Route path="/privacy-policy" exact element={<PrivacyPolicy/>} />
      <Route path="/legal-notice-and-terms-of-use" exact element={<Terms/>} />
      <Route path="/under-construction" exact element={<UnderConstruction/>} />
    </Routes>
  </AppContainer>
  );
}

export default App;

/*
import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header>
    </div>
  );
}

export default App;
*/