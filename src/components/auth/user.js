import React from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import { toast } from 'react-toastify';

class User extends React.Component{
    constructor(props){
        super(props);
        let logged = localStorage.getItem('auth-token')?true:false;
        this.state = {
            user: '',
            logged,
            checkToken: true
        }
    }

    async componentDidMount(){
        if(!this.state.logged)return;
        const auth = axios.create({
            baseURL: 'http://localhost:3000/api',
            headers: {
                Authorization: localStorage.getItem('auth-token')
            }
        });
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
    }

    componentWillUnmount(){
        delete this.state.logged;
        delete this.state.user;
    }

    configToast = {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    }
    errorToast = (text)=>toast.error(text, this.configToast);

    successToast = (text)=>toast.success(text, this.configToast);

    infoToast = (text)=>toast.info(text, this.configToast);

    defaultToast = (text)=>toast(text, this.configToast);

    render(){
        var data = this.state.user;
        if(!this.state.logged){
            this.infoToast('😤 Vui lòng đăng nhập!');
            return <Redirect to='/user/login' />;
        }
        if(!this.state.checkToken){
            return <Redirect to='/user/logout' />;
        }
        if(!data){
            return (
                <div className="loading">
                    loadding...
                </div>
            );
        }
        return(
            <div>
                {data.name} <br/>
                {data.email} <br/>
                <Link to="/user/logout"> <span>Logout</span> </Link>
            </div>
            
        );
    }
}

export default User;