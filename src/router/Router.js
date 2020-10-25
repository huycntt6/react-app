import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Auth from '../component/auth/Auth';

//container
import UserContainer from'../component/user/UserContainer';
import PageContainer from'../component/pages/PageContainer';


import Login from'../component/auth/Login';
import Register from'../component/auth/Register';

export default () => {
  return (
      <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/user" component={()=>(<Auth><UserContainer/></Auth>)} />
          <PageContainer/>
      </Switch>
  );
}
