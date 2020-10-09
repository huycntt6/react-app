import React from 'react';
import './App.scss';
import { ToastContainer } from 'react-toastify';

import Routers from './router'
//import block
import Bg from './components/blocks/background/bg';

class App extends React.Component {

  render(){
    return (
      <div className="App">
        <Routers />
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
  }
}

export default App;
