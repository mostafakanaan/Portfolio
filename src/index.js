import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/style.css';
import App from './App';

const loader = document.querySelector('.loader');

// if you want to show the loader when React loads data again
const showLoader = () => loader.classList.remove('loader--hide');

const hideLoader = () => loader.classList.add('loader--hide');


document.addEventListener("DOMContentLoaded", function () {
  setTimeout(() => {
    ReactDOM.render(
      <App hideLoader={hideLoader}
        showLoader={showLoader} />,
      document.getElementById('root')
    );
  }, 1000);
});