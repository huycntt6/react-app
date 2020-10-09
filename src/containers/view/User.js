import React from 'react';
import { Link } from 'react-router-dom';

class User extends React.Component{
    render(){
        
        return(
            <div className="row">
                <div className="col-lg-4 col-md-6 item">
                    <Link to="/user/1">
                        <i className="far fa-id-card"></i>
                        <h4>Information</h4>
                    </Link>
                </div>
                <div className="col-lg-4 col-md-6 item">
                    <Link to="http://google.com" className="change-avatar">
                        <i className="fas fa-shield-alt"></i>
                        <h4>Password</h4>
                    </Link>
                </div>
                <div className="col-lg-4 col-md-6 item">
                    <Link to="http://google.com" className="change-avatar">
                        <i className="far fa-user-circle"></i>
                        <h4>Avatar</h4>
                    </Link>
                </div>
                <div className="col-lg-4 col-md-6 item">
                    <Link to="http://google.com" className="change-avatar">
                        <i className="far fa-user-circle"></i>
                        <h4>Avatar</h4>
                    </Link>
                </div>
            </div>
        );
    }
}

export default User;