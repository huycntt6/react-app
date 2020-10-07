import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import '../styles.scss';
import { toast } from 'react-toastify';
import axios from 'axios';

class Login extends React.Component{

    constructor(props){
        super(props);
        let logged = localStorage.getItem('auth-token')?true:false;
        this.state = {
            email: '',
            password: '',
            logged,
            loadingHidden: true
        }
        this.login = this.login.bind(this);
        this.onChange = this.onChange.bind(this);
        
    }

    login(e){
        e.preventDefault();
        this.setState({
            loadingHidden: false
        });
        axios.post('https://admiring-heisenberg-b7fd45.netlify.app/.netlify/functions/api/user/login',{
            'email': this.state.email,
            'password': this.state.password
        }).then(res => {
            let status = res.data.success;
            let err_code = res.data.error_code || '';
            if(!status && err_code === '101'){
                this.errorToast('😖 '+res.data.error.details[0].path +' không hợp lệ!');
                this.setState({
                    loadingHidden: true
                });
                return;
            }
            if(!status && err_code !== '101'){
                this.errorToast('😖 '+res.data.error);
                this.setState({
                    loadingHidden: true
                });
                return;
            }
            this.successToast('😚 Đăng nhập thành công!');
            localStorage.setItem('auth-token', res.data.token);
            this.setState({
                logged: true
            });
            
        }).catch(err=>{
            console.log(err);
        });
    }
    
    onChange(e){
        this.setState ({
            [e.target.name]: e.target.value
        });
    }

    componentWillUnmount(){
        delete this.state;
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

    render(){
        if(this.state.logged){
            return <Redirect to="/user"/>
        }
        return(
            <div className="login">
                <div className="container form-main">
                    <div className="d-flex justify-content-center h-100 child-form-main">
                        <div id="formContent">
                   
                            <div className="first">
                                <h1 className="my-5">Đăng Nhập</h1>
                            </div>
                  
                            <form onSubmit={e=>this.login(e)}>

                                <input
                                required
                                type="email"
                                className="second zero-raduis"
                                placeholder="Địa chỉ Email"
                                onChange={e=>this.onChange(e)}
                                name="email"
                                value={this.state.email} />

                                <input
                                required
                                minLength="6"
                                type="password"
                                className="third zero-raduis"
                                placeholder="Mật khẩu"
                                onChange={e=>this.onChange(e)}
                                name="password"
                                value={this.state.password} />
                                    
                                <div id="formFooter">
                                    Chưa có tài khoản? <Link to="/user/register" className="underlineHover" href="#">Đăng ký ngay</Link>
                                </div>
                                
                                <button type="submit" className={"fourth zero-raduis " + this.state.loadingHidden}>
                                    <span className="spinner-grow spinner-grow-sm" hidden={this.state.loadingHidden} role="status" aria-hidden="true"></span> Đăng Nhập
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;