import React from 'react';
import logo from './logo.svg';
import './App.css';
import {withAuthenticator,AmplifySignOut} from '@aws-amplify/ui-react'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello this is Mona's React App deployed in AWS Amplify</h1>
        <h2>We now have Auth enabled!! </h2>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);
