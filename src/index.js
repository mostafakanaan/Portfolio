import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import App from './App';

const loader = document.querySelector('.loader');

// if you want to show the loader when React loads data again
const showLoader = () => loader.classList.remove('loader--hide');

const hideLoader = () => loader.classList.add('loader--hide');

ReactDOM.render(
  <React.StrictMode>
    <App hideLoader={hideLoader}
      showLoader={showLoader}  />
  </React.StrictMode>,
  document.getElementById('root')
);