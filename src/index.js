import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';

//import boostrap
import 'bootstrap/dist/css/bootstrap.min.css';
import'@fortawesome/fontawesome-free/css/all.css';
import 'react-toastify/dist/ReactToastify.css';

import 'bootstrap/dist/js/bootstrap.min.js';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('fot-shop')
);

serviceWorker.unregister();
