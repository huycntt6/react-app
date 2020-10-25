import React from 'react';

export default (props)=>{
        const link = '';
        const user =  props.user.userData;
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
            </div>
        );
}