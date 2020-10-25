import React from 'react';
import PageRouter from '../../router/PageRouter';
import { Container, Row, Col } from 'reactstrap';
import hvh from '../../media/image/hvh.png';
import './PageContainer.scss';

class MainUser extends React.Component{
    render(){
        return(
            <Container className="cv-main page-style">
                <Row>
                    <Col lg={4} className="info-content">
                        <div className="top">
                            <div className="top-photo">
                                <img alt="avatar" draggable="false" src={hvh} />
                            </div>
                            <div className="top-title">
                                <h2>Hoang Van Huy</h2>
                                <h4>Web Developer</h4>
                            </div>
                        </div>
                        <div className="cv-button">
                                <a href="/file/CV-HoangVanHuy.docx" download className="btn btn-primary">Download CV</a>
                        </div>
                    </Col>
                    <Col lg={8} className="content-area scrollbar">
                        <PageRouter/>
                    </Col>
                    
                </Row>
                
            </Container>
        );
    }
}

export default MainUser;