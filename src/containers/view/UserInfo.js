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
        }
    }

    render(){
        var data = this.state.user;
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
                <div class="page-title">
                    <h1>{data.name}</h1>
                </div>
                <div class="info-list">
                    <ul>
                        <li>
                            <span class="title">Age</span>
                            <span class="value">32</span>
                        </li>
                        <li>
                            <span class="title">Address</span>
                            <span class="value">88 Some Street, Some Town</span>
                        </li>
                        <li>
                            <span class="title">Email</span>
                            <span class="value">{data.email}</span>
                        </li>
                        <li>
                            <span class="title">Phone</span>
                            <span class="value">+0123 123 456 789</span>
                        </li>
                    </ul>
                </div>
                <Link to="/user" className="btn btn-primary">Back</Link>
            </div>
        );
    }
  
};

export default UserInfo;