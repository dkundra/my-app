import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './Login';
import AppBootstrap from './AppBootstrap';
import AppState from './AppState';
import AppStateTimer from './AppStateTimer';
import AppProps from './AppProps';
import AppComponentDidMount from './AppComponentDidMount';
import AppUpdatingPhase from './AppUpdatingPhase';

ReactDOM.render(
  <React.StrictMode>
    <div><App /><Login/><AppBootstrap/><AppState/><AppStateTimer/><AppProps element2="React"/><AppComponentDidMount/>
    <AppUpdatingPhase/></div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
