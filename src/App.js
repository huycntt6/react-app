import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/pages/home/home';
import { ToastContainer } from 'react-toastify';

//import block
import Header from './components/blocks/header/header';
import About from './components/pages/about/about';
import Contact from './components/pages/contact/contact';
import err404 from './components/pages/404/404';

// Auth
import User from './components/auth/user';
import Login from './components/auth/login/login';
import Register from './components/auth/register/register';
import Logout from './components/auth/logout';

class App extends React.Component {

  render(){
    return (
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          
          
          <Route path="/user" component={User} exact />
          <Route path="/user/login" component={Login} />
          <Route path="/user/register" component={Register} />
          <Route path="/user/logout" component={Logout} />
          
          <Route component={err404} />
        </Switch>
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
        <ul className="bg-bubbles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </Router>
    );
  }
}

export default App;
