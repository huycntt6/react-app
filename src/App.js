import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

import Router from './router/Router';
import Header from './component/blocks/header/Header';
import { ToastContainer } from 'react-toastify';
import Bg from './component/blocks/background/bg';


export default () => (
  <div className="App">
    <Header/>
    <Router/>
    <ToastContainer
            position="top-left"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
    />
    <Bg/>
  </div>
);
