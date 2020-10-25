import React from 'react';
import axios from 'axios';
import Loading from '../../component/blocks/spinner/spinner';
import { Redirect } from 'react-router-dom';

class Auth extends React.Component{
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

    render(){

        if(!this.state.logged)return <Redirect to='/login' />;

        if(!this.state.checkToken)return<Redirect to='/logout' />;
        
        if(!this.state.user) return <Loading/>;


        const childrenWithProps = React.Children.map(this.props.children, child => {
            const props = {user: this.state.user};
            if (React.isValidElement(child)) {
                return React.cloneElement(child, props);
            }
            return child;
        });
        return (childrenWithProps);
    }
}
export default Auth;