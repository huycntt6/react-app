import React from 'react';
import axios from 'axios';
import { Redirect, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loader from '../../components/blocks/loader/loader';

class MainUser extends React.Component {
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
            return <Redirect to='/login' />;
        }
        if(!this.state.checkToken){
            return <Redirect to='/logout' />;
        }
        if(!data){
            return (
                <div className="container user-profile">
                    <Loader/>
                </div>
            );
        }
        return (
            <div className="container user-profile">
                <div className="row">
                    <div className="col-lg-4 info-content">
                        <div className="top">
                            <div className="top-photo">
                                <img alt="avatar" draggable="false" src="//lmpixels.com/wp/breezycv-wp-lin/demo2/wp-content/uploads/sites/2/2020/06/main_photo.jpg" />
                            </div>
                            <div className="top-title">
                                <h2>{data.name}</h2>
                                <h4>{data.email}</h4>
                            </div>
                        </div>
                        <div className="cv-button">
                            <Link to="/logout" className="btn btn-primary"> <span>Logout</span> </Link>
                        </div>
                    </div>
                    <div className="col-lg-8 content-area">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}

export default MainUser;