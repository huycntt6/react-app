import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import Header from '../components/blocks/header/header';
//import layout
import Main from '../containers/layouts/Main';
import UserMain from '../containers/layouts/MainUser';

//import page
import Home from '../components/pages/home/home';
import About from '../components/pages/about/about';
import Contact from '../components/pages/contact/contact';
//import err404 from '../components/pages/404/404';

// Auth
import Login from '../components/auth/login/login';
import Register from '../components/auth/register/register';
import Logout from '../components/auth/logout';

//import user page
import User from '../containers/view/User';
import UserInfo from '../containers/view/UserInfo';
import UserPassword from '../containers/view/UserPassword';


export default () => {

    return (
      <Router>
        <Header/>
        <Switch>
            <Route path="/login" component={Login} exact />
            <Route path="/register" component={Register} exact />
            <Route path="/logout" component={Logout} exact />

            <Route path="/user/:path?" exact>
                    <UserMain>
                        <Switch>
                            <Route path="/user" component={User} exact/>
                            <Route path="/user/info" component={UserInfo} />
                            <Route path="/user/password" component={UserPassword} />
                        </Switch>
                    </UserMain>
            </Route>
          
            <Route>
                <Main>
                    <Switch>
                        <Route path="/" component={Home} exact />
                        <Route path="/about" component={About} />
                        <Route path="/contact" component={Contact} />
                    </Switch>
                </Main>
            </Route>
        </Switch>
      </Router>
    );
}
