import React from 'react';

import { Redirect, Link } from 'react-router-dom';
//import block
import Loader from '../../components/blocks/loader/loader';
import defaultavatar from '../../public/image/default-avatar.png';
export default ({isLogged, user, checkToken, children, uploadAvatar}) => {

    if(!isLogged)return <Redirect to='/login' />;
    if(!checkToken)return<Redirect to='/logout' />;
    if(!user)return<div className="container user-profile"><Loader/></div>;
    
    return (
        <div className="container user-profile">
            <div className="row">
                <div className="col-lg-4 info-content">
                    <div className="top">
                        <div className="top-photo">
                            <div className="avatar">
                                <img alt="avatar" draggable="false" src={user.avatarURL?user.avatarURL: defaultavatar} />
                                <input type="file" accept="image/*" onChange={uploadAvatar.bind(this)} />
                            </div>
                        </div>
                        <div className="top-title">
                            <h2>{user.name}</h2>
                            <h4>{user.email}</h4>
                        </div>
                    </div>
                    <div className="cv-button">
                        <Link to="/logout" className="btn btn-primary"> <span>Logout</span> </Link>
                    </div>
                </div>
                <div className="col-lg-8 content-area">
                    {children}
                </div>
            </div>
        </div>
    );
}