import React from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Home from'../component/pages/home/home';
import About from'../component/pages/about/about';
import Resume from'../component/pages/Resume/Resume';

import err404 from '../component/pages/404/404';

const PageRouter = ({location}) => {
    return (
        <TransitionGroup className="transition-group">
            <CSSTransition key={location.key} timeout={ 600 } classNames="fade">
                <Switch location={location}>
                    <Route path={'/'} component={Home} exact/>
                    <Route path={'/about'} component={About}/>
                    <Route path={'/resume'} component={Resume}/>
                    <Route component={err404}/>
                </Switch>
            </CSSTransition>
        </TransitionGroup>
    );
}
export default withRouter(PageRouter);