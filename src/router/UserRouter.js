import React from 'react';
import {Route, Switch, useRouteMatch} from 'react-router-dom';

import err404 from '../component/pages/404/404';

import Dashboard from '../component/user/dashboard/dashboard';
import UserInfo from '../component/user/UserInfo/UserInfo';
import Logout from '../component/auth/Logout';


export default (props) => {
    const match = useRouteMatch();
    return (
        <Switch>
            <Route path={`${match.url}/`} component={()=>(<Dashboard level={props.userData.level}/>)} exact/>
            <Route path={`${match.url}/info`} component={()=>(<UserInfo user={props}/>)}/>
            <Route path={`${match.url}/logout`} component={Logout}/>
            <Route component={err404}/>
        </Switch>
    );
}
