import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import '../styles.scss';
import axios from 'axios';
import { toast } from 'react-toastify';

class Register extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            name: '',
            registered: false,
            loadingHidden: true
        }
        this.register = this.register.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount(){
       
    }

    async register(e){
        e.preventDefault();
        this.setState({
            loadingHidden: false
        });
        const user = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
        }
        try{
            const res = await axios.post('/api/user/register', user);
            let status = res.data.success;
            let errCode = res.data.error_code || '';
            if(!status && errCode === '101'){
                this.errorToast('😖 ' + res.data.error.details[0].path + ' không hợp lệ!');
                this.setState({
                    loadingHidden: true
                });
                return;
            }
            if(!status && errCode !== '101'){
                this.errorToast( '😖 '+res.data.error);
                this.setState({
                    loadingHidden: true
                });
                return;
            }
            this.successToast('😚 Đăng ký thành công!');
            this.setState({
                registered: true
            });
        }catch(err){
            alert('Gặp vấn đề về đường truyền, vui lòng thử lại sau!');
        }
    }

    onChange(e){
        this.setState ({
            [e.target.name]: e.target.value
        });
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
    
    componentWillUnmount(){
        delete this.state;
    }
    render(){
        if(this.state.registered){
            return <Redirect to="/user/login" />
        }
        return(
            <section className="register">
                <div className="container form-main">
                    <div className="d-flex justify-content-center child-form-main">
                        <div id="formContent">
                   
                            <div className="first">
                                <h1 className="my-5">ĐĂNG KÝ</h1>
                            </div>
                  
                            <form onSubmit={e=>this.register(e)}>

                                <input
                                required
                                type="text"
                                className="third zero-raduis"
                                placeholder="Họ tên" onChange={e=>this.onChange(e)}
                                name="name" value={this.state.name} />

                                <input
                                required
                                type="email"
                                className="second zero-raduis"
                                placeholder="Địa chỉ Email"
                                onChange={e=>this.onChange(e)}
                                name="email" value={this.state.email} />
                                
                                <input
                                required
                                type="password"
                                className="third zero-raduis"
                                placeholder="Mật khẩu" onChange={e=>this.onChange(e)}
                                name="password" value={this.state.password} />
                                    
                                <div id="formFooter">
                                    Đã có tài khoản? <Link to="/login" className="underlineHover" href="#">Đăng nhập</Link>
                                </div>
                                <button type="submit" className={"fourth zero-raduis " + this.state.loadingHidden} >
                                <span className="spinner-grow spinner-grow-sm" hidden={this.state.loadingHidden} role="status" aria-hidden="true"></span> Đăng Ký
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Register;