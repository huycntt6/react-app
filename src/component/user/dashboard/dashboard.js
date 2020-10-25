import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';

export default (props)=> (
    <Row className="pb-3 mr-0 dashboard">
        <Col lg={4} md={6} className="item">
            <Link to="/user/info">
                <i className="far fa-id-card"></i>
                <h4>Information</h4>
            </Link>
        </Col>
        <Col lg={4} md={6} className="item">
            <Link to="/user/password">
                <i className="fas fa-shield-alt"></i>
                <h4>Password</h4>
            </Link>
        </Col>
        {props.level==="admin"?
        <Col lg={4} md={6} className="item">
            <Link to="http://google.com">
                <i className="fas fa-pager"></i>
                <h4>Pages</h4>
            </Link>
        </Col>: ''}
        {props.level==="admin"?
        <Col lg={4} md={6} className="item">
            <Link to="http://google.com">
                <i className="fas fa-users"></i>
                <h4>Users</h4>
            </Link>
        </Col>: ''}
        <Col lg={4} md={6} className="item">
            <Link to="/user/logout">
                <i className="fas fa-sign-out-alt"></i>
                <h4>Logout</h4>
            </Link>
        </Col>
    </Row>
);