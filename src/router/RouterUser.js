import React from 'react';
import { Route, Switch } from 'react-router-dom';

import axios from 'axios';
import { toast } from 'react-toastify';
//resize image
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
            checkToken: true,
            loading: false
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
        this.setState({
            loading: true
        });
        const file = e.target.files[0];
        
        const resizeFile = (file) => new Promise(resolve => {
            Resizer.imageFileResizer(file, 300, 300, 'JPEG', 100, 0,
            uri => {
                resolve(uri);
            },
            'blob'
            );
        });

        const image = await resizeFile(file);
        const formData = new FormData();
        
        formData.append('file', image);
        formData.append('userID', this.state.user._id);
        
        try{
            const res = await axios.post('/api/user/avatar/add', formData);
            this.setState(prevState => {
                let user = Object.assign({}, prevState.user);
                user.avatarURL = res.data;
                return { user };
            })
            this.successToast('✅ Change avatar success!!!');
            this.setState({
                loading: false
            })
        }catch(err){
            this.errorToast('Error! Please try again later!');
            this.setState({
                loading: false
            })
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
        const isloading = this.state.loading;
        return (
            
            <UserMain isLogged = {isLogged} user = {user} checkToken = {checkToken} uploadAvatar = {this.uploadAvatar.bind(this)} loading= {isloading}>
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
