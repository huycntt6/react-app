import React from 'react';
import { Link } from 'react-router-dom';

class UserInfo extends React.Component{
    constructor (props){
        super(props);
        const token = localStorage.getItem('auth-token');
        this.state = {
            token: token
        }
    }

    async componentDidMount(){

    }

    render(){
        // if(this.state.token){
        //     return <Redirect to="/login" />;
        // }
        
        return(
            <>
                <Link to="/user" className="btn btn-primary">user info</Link>
            </>
        );
    }
  
};

export default UserInfo;