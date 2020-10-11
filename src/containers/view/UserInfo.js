import React from 'react';
import { Link } from 'react-router-dom';

export default ({user})=>{

        const link = ''; 
        return(
            <div className="info">
                <div className="page-title">
                    <h1>{user.name}</h1>
                </div>
                <div className="info-list">
                    <ul>
                        <li>
                            <span className="title">Age</span>
                            <span className="value">{user.age?user.age:link}</span>
                        </li>
                        <li>
                            <span className="title">Address</span>
                            <span className="value">{user.address?user.address:link}</span>
                        </li>
                        <li>
                            <span className="title">Email</span>
                            <span className="value">{user.email}</span>
                        </li>
                        <li>
                            <span className="title">Phone</span>
                            <span className="value">{user.phone?user.phone:link}</span>
                        </li>
                    </ul>
                </div>
                <Link to="/user" className="btn btn-primary">Back</Link>
            </div>
        );
  
};