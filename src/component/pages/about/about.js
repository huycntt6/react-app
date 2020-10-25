import React from 'react';
import { Col, Row } from 'reactstrap';
import cntd from '../../../media/image/cntd.jpg';

export default () => (
    <section className="about">
        <div className="page-title">
            <h1>About <span>Me</span></h1>
        </div>
        <Row>
            <Col sm={7} xs={12}>
                <p>My name is Hoang Van Huy. I’m 23 years old and I’m single. I got 6+ month experience as an internship at ARI technology joint stock company & 3T technology solutions company. I’m a careful and hard-working person. I’m eager to learn new things and willing to work in team. I easily adapt to with new working environment and take initiative in work.</p>
            </Col>
            <Col sm={5} xs={12}>
                <div className="info-list">
                    <ul>
                        <li>
                            <span className="title">Age</span>
                            <span className="value">23</span>
                        </li>
                        <li>
                            <span className="title">Address</span>
                            <span className="value">39A-297, Phuoc Long B  ward, District 9, HCM city</span>
                        </li>
                        <li>
                            <span className="title">Email</span>
                            <span className="value">huycntt6@gmail.com</span>
                        </li>
                        <li>
                            <span className="title">Phone</span>
                            <span className="value">+84835420337</span>
                        </li>
                    </ul>
                </div>
            </Col>
        </Row>
        <div className="page-title mt-4">
            <h1>Objective</h1>
        </div>
        <p className="objective">Take advantages of programming skills and experience.</p>
        <p className="objective">Try to learning as much as possible and doing my best in order to accompish my task.</p>
        <p className="objective">To have good opportunities to get promotion in my job.</p>
        <p className="objective">Advance knowledge and skill specialize.</p>
        <p className="objective">Develop my skills with development of company, I want to prove myself.</p>
        <div className="page-title mt-4 mb-2">
            <h1>Education</h1>
        </div>
        <div className="block-title education">
            <h3 className="mb-0">Thu Duc College Of Technology</h3>
            <strong className="ml-1">Faculty of information Technology</strong>
            <p className="ml-1">2017 - 2020</p>
            <img alt="Cao-Dang-Cong-Nghe-Thu-Duc" src={cntd} className="img-fluid" />
        </div>
    </section>
);
    
