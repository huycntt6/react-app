import React from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import Loader2 from '../../components/blocks/loader/loader2';

class UserInfo extends React.Component{
    constructor (props){
        super(props);
        const logged = localStorage.getItem('auth-token')?true:false;
        this.state = {
            user: '',
            logged,
            checkToken: true
        }
    }

    async componentDidMount(){
        if(!this.state.logged)return;
        const auth = axios.create({
            baseURL: 'https://admiring-heisenberg-b7fd45.netlify.app/.netlify/functions/api',
            headers: {
                Authorization: localStorage.getItem('auth-token')
            }
        });
        try{
            const res = await auth.get('/user');
            if(!res.data.success){
                this.errorToast('😖'+res.data.error);
                this.setState({
                    checkToken: false
                });
            }
            if(res.data.success){
                this.setState({
                    user: res.data.user
                });
            }
        }catch(err){
            alert('Gặp vấn đề về đường truyền, vui lòng thử lại sau!');
            window.location.reload();
        }
    }

    render(){
        const data = this.state.user;
        const link = <Link to="http://google.com">Edit</Link> 
        if(!this.state.logged){
            this.infoToast('😤 Vui lòng đăng nhập!');
            return <Redirect to='/login' />;
        }
        if(!this.state.checkToken){
            return <Redirect to='/logout' />;
        }
        if(!data){
            return (
                <div className="d-flex justify-content-center align-items-center h-100 pb-3">
                    <Loader2 />
                </div>
            );
        }
        
        return(
            <div className="info">
                <div className="page-title">
                    <h1>{data.name}</h1>
                </div>
                <div className="info-list">
                    <ul>
                        <li>
                            <span className="title">Age</span>
                            <span className="value">{data.age?data.age:link}</span>
                        </li>
                        <li>
                            <span className="title">Address</span>
                            <span className="value">{data.address?data.address:link}</span>
                        </li>
                        <li>
                            <span className="title">Email</span>
                            <span className="value">{data.email}</span>
                        </li>
                        <li>
                            <span className="title">Phone</span>
                            <span className="value">{data.phone?data.phone:link}</span>
                        </li>
                    </ul>
                </div>
                <Link to="/user" className="btn btn-primary">Back</Link>
            </div>
        );
    }
  
};

export default UserInfo;