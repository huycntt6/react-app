import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
//resize image
import Resizer from 'react-image-file-resizer';

import defaultavatar from '../../media/image/default-avatar.png';

import { Container, Col, Row, Input } from 'reactstrap';
import UserRouter from '../../router/UserRouter';
import './UserContainer.scss';

class UserContainer extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            loading: false,
            avatar: ''
        }
        this.uploadAvatar = this.uploadAvatar.bind(this);
    }

    componentDidMount(){
        this.setState({
            avatar: this.props.user.avatarURL
        });
    }

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
        formData.append('userID', this.props.user._id);
        
        try{
            const res = await axios.post('/api/user/avatar/add', formData);
            this.successToast('✅ Change avatar success!!!');
            this.setState({
                loading: false,
                avatar: res.data
            })
        }catch(err){
            this.errorToast('Error! Please try again later!');
            this.setState({
                loading: false
            })
            return;
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

    render(){
        return(
            <Container className="cv-main user-style">
                <Row>
                    <Col lg={4} className="info-content">
                        <div className="top">
                            <div className="top-photo">
                                <div className="avatar">
                                    <div className={"spinner-load "+(this.state.loading?'d-flex':'d-none')}>
                                        <div className="spinner-border text-primary"></div>
                                    </div>
                                    <img alt="avatar" draggable="false" src={this.state.avatar?this.state.avatar: defaultavatar} />
                                    <Input type="file" accept="image/*" onChange={this.uploadAvatar} />
                                </div>
                            </div>
                            <div className="top-title">
                                <h2>{this.props.user.name}</h2>
                                <h4>{this.props.user.email}</h4>
                            </div>
                        </div>
                        <div className="cv-button">
                            <Link to="/user" className="btn btn-primary"> <span>Dashboard</span> </Link>
                        </div>
                    </Col>
                    <Col lg={8} className="content-area">
                        <UserRouter userData={this.props.user}/>
                    </Col>
                    
                </Row>
                
            </Container>
        );
    }
}

export default UserContainer;