import React from 'react';
import { Link } from 'react-router-dom';

class User extends React.Component{
    render(){
        
        return(
            <div className="row">
                <div className="col-lg-4 col-md-6 item">
                    <Link to="/user/info">
                        <i className="far fa-id-card"></i>
                        <h4>Information</h4>
                    </Link>
                </div>
                <div className="col-lg-4 col-md-6 item">
                    <Link to="/user/password">
                        <i className="fas fa-shield-alt"></i>
                        <h4>Password</h4>
                    </Link>
                </div>
                <div className="col-lg-4 col-md-6 item">
                    <Link to="http://google.com">
                        <i className="fas fa-pager"></i>
                        <h4>Pages</h4>
                    </Link>
                </div>
                <div className="col-lg-4 col-md-6 item">
                    <Link to="http://google.com">
                        <i className="fas fa-users"></i>
                        <h4>Users</h4>
                    </Link>
                </div>
            </div>
        );
    }
}

export default User;