import React from 'react';
import { Link } from 'react-router-dom';

class UserPassword extends React.Component{
    constructor (props){
        super(props);
        const token = localStorage.getItem('auth-token');
        this.state = {
            token: token
        }
        
    }

    render(){
        // if(this.state.token){
        //     return <Redirect to="/login" />;
        // }
        console.log(this.props.isAuthed);
        return(
            <>
                <Link to="/user" className="btn btn-primary">user password</Link>
            </>
        );
    }
  
};

export default UserPassword;