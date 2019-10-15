import React from 'react';
import './App.css';
import {Route, Link} from 'react-router-dom';
import axios from 'axios';

function App() {

axios
  .get('https://www.potterapi.com/v1/sortingHat')
    .then(function (response) {
    console.log(response);
    })
    .catch(function (error) {
    console.log(`There was an error. The error is: ${error}`);
    });

  return (
    <div className="App">
      <h1>Your a Wizard Harry.</h1>
    </div>
  );
}

export default App;
