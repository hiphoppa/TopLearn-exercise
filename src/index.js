import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/Container/App';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';

ReactDOM.render(
  <BrowserRouter>
    <ToastContainer />
    <App />
  </BrowserRouter>
  ,
  document.getElementById('root')
);