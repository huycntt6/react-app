import React from 'react';
import { Route, Switch } from 'react-router-dom';

import axios from 'axios';
import { toast } from 'react-toastify';
import Resizer from 'react-image-file-resizer';

import UserMain from '../containers/layouts/MainUser';
//import user page
import User from '../containers/view/User';
import UserInfo from '../containers/view/UserInfo';
import UserPassword from '../containers/view/UserPassword';

class RouterUser extends React.Component {
    constructor(props){
        super(props);
        const logged = localStorage.getItem('auth-token')?true:false;
        this.state = {
            user: '',
            logged,
            checkToken: true
        }
    }

    async componentDidMount(){
        //console.log(this.props.isAuthed);
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

    uploadAvatar = (event)=>{
        if(!event.target.files[0])
       return;
       Resizer.imageFileResizer(
            event.target.files[0],
            300,300,'JPEG',100,0,
            uri => {
                this.setState({});
            },
            'blob',200,200,
        );
    }

    render(){
        const isLogged = this.state.logged;
        const user = this.state.user;
        const checkToken = this.state.checkToken;
        return (
            
            <UserMain isLogged = {isLogged} user = {user} checkToken = {checkToken} uploadAvatar = {this.uploadAvatar.bind(this)}>
                <Switch>
                    <Route path="/user" component={User} exact/>
                    <Route path="/user/info" component={()=><UserInfo user = {user} />} />
                    <Route path="/user/password" component={()=><UserPassword isAuthed={true} />} />
                </Switch>
            </UserMain>
            
        );
    }
}

export default RouterUser;
