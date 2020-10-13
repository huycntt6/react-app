import React from 'react';
import { Route, Switch } from 'react-router-dom';

import axios from 'axios';
import { toast } from 'react-toastify';

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
        if(!this.state.logged)return;
        const auth = axios.create({
            headers: {
                Authorization: localStorage.getItem('auth-token')
            }
        });
        try{
            const res = await auth.get('/api/user');
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

    uploadAvatar = async(e)=>{
        if(!e.target.files[0])return;

        const file = e.target.files[0]
        const formData = new FormData();
        formData.append('file', file);
        formData.append('name', this.state.user._id);

        try{
            const res = await axios.post('http://storage.giahuy.3tc.vn', formData);
            const res2 = await axios.post('/api/user/avatar', {id: this.state.user._id, avatar: res.data, avatarURL: res.config.url+'/upload/images/'});
            formData.set('delete', this.state.user.avatar);
            axios.post('http://storage.giahuy.3tc.vn/upload/delete/',formData);
            this.setState(prevState => {
                let user = Object.assign({}, prevState.user);
                user.avatarURL = res2.data.avatarURL;
                user.avatar = res2.data.avatar;
                return { user };
            })
            this.successToast('✅ Change avatar success!!!');
        }catch(err){
            this.errorToast('Maximum Avatar is 1mb!');
            return;
        }
    }

    componentWillUnmount(){
        delete(this.state);
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
