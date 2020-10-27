import React from 'react';
import { Col, Row } from 'reactstrap';
import './contact.scss';

import Map from '../../blocks/map/map';

export default () => (
    <section className="contact">
        <div className="page-title">
            <h1>About <span>Me</span></h1>
        </div>

        <Row>
            <Col xs={12} sm={4}>
                <div className="info-block">
                    <i className="fas fa-map-marker-alt"></i>
                    <h4>Q.9, Ho Chi Minh</h4>
                </div>
                <div className="info-block">
                    <i className="fas fa-phone"></i>
                    <h4>+84835420337</h4>
                </div>
                <div className="info-block">
                    <i className="far fa-envelope"></i>
                    <h4>huycntt6@gmail.com</h4>
                </div>
            </Col>
            <Col xs={12} sm={8}>
                <Map />
            </Col>
        </Row>
    </section>
);