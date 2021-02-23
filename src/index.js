import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/Container/App';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import { Store } from './Store';

ReactDOM.render(
  <Provider store={Store}>
    <BrowserRouter>
      <ToastContainer />
      <App />
    </BrowserRouter>
  </Provider>
  ,
  document.getElementById('root')
);