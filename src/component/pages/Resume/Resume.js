import React from 'react';
import { Col, Row } from 'reactstrap';
import naturix from '../../../media/image/naturix.png';
import ironstyle from '../../../media/image/ironstyle.png';
import piwoo from '../../../media/image/piwoo.png';
import { Link } from 'react-router-dom';

export default () => (
    <section className="resume">
        <div className="page-title">
            <h1>Resume</h1>
        </div>
        <Row>
            <Col xs={12} sm={8}>
                <div className="block-title">
                    <h3>Experience</h3>
                </div>
                <div className="timeline timeline-second-style clearfix">
                    <div className="timeline-item clearfix">
                        <div className="left-part">
                        <h5 className="item-period">2017 - 2020</h5>
                        </div>
                        <div className="divider"></div>
                        <div className="right-part">
                        <h4 className="item-title">Personal Pummary</h4>
                        <p>02+ years of experience in front-end web development.</p>
                        <p>03+ months experience in back-end web development with Express, Mongodb.</p>
                        <p>08+ months of experience in web development with Opencart 3, ReactJS, HTML5, CSS3, Liquid…</p>
                        </div>
                    </div>
                    <div className="timeline-item clearfix">
                        <div className="left-part">
                        <h5 className="item-period">May 2019 - August 2029</h5>
                        <span className="item-company">ARI technology joint stock company</span>
                        </div>
                        <div className="divider"></div>
                        <div className="right-part">
                        <h4 className="item-title">Chrome Extension Development – Internship</h4>
                        <p><strong>Element Destroy:</strong> Allow users to adjust components in web pages.</p>
                        <p><strong>Auto Login: </strong> : Allow the user to save information and login automatically into the saved websites.</p>
                        </div>
                    </div>
                    <div className="timeline-item clearfix">
                        <div className="left-part">
                            <h5 className="item-period">October 2019 - January 2020</h5>
                            <span className="item-company">3T technology solutions company</span>
                        </div>
                        <div className="divider"></div>
                        <div className="right-part">
                            <h4 className="item-title">Web Development – Internship</h4>
                            <p>Take Photoshop-based website designs and convert them into W3C compliant front-end code.</p>
                            <p>Modification and maintenance of websites and web applications.</p>
                            <p>Design and build themes for opencart 3.</p>
                        </div>
                    </div>
                </div>
            </Col>
            <Col xs={12} sm={4}>
                <div className="block-title">
                    <h3>Skills</h3>
                </div>
                <div className="skills-info skills-second-style">
                    
                    <div className="skill clearfix">
                        <h4>Front End</h4>
                        <div className="skill-value">95%</div>
                    </div>
                    <div className="skill-container skill-1">
                        <div className="skill-percentage"></div>
                    </div>
                        
                    <div className="skill clearfix">
                        <h4>Back End</h4>
                        <div className="skill-value">65%</div>
                    </div>
                    <div className="skill-container skill-2">
                        <div className="skill-percentage"></div>
                    </div>
                    <div className="skill clearfix">
                        <h4>English</h4>
                        <div className="skill-value">50%</div>
                    </div>
                    <div className="skill-container skill-3">
                        <div className="skill-percentage"></div>
                    </div>
                    <div className="skill clearfix">
                        <h4>Team Work</h4>
                        <div className="skill-value">95%</div>
                    </div>
                    <div className="skill-container skill-4">
                        <div className="skill-percentage"></div>
                    </div>
                    <div className="skill clearfix">
                        <h4>Problem Solving</h4>
                        <div className="skill-value">85%</div>
                    </div>
                    <div className="skill-container skill-5">
                        <div className="skill-percentage"></div>
                    </div>
                    <div className="skill clearfix">
                        <h4>Research</h4>
                        <div className="skill-value">99%</div>
                    </div>
                    <div className="skill-container skill-6">
                        <div className="skill-percentage"></div>
                    </div>
                </div>
                <div className="block-title">
                    <h3>Knowledges</h3>
                </div>
                <ul className="knowledges">
                    <li>Bootstrap 4</li>
                    <li>Html5</li>
                    <li>Css3</li>
                    <li>Jquery</li>
                    <li>Liquid</li>
                    <li>Reactjs</li>
                    <li>Express</li>
                    <li>MongoDB</li>
                    <li>Sass</li>
                    <li>Less</li>
                </ul>
                <div className="block-title mt-5">
                    <h3>Tools</h3>
                </div>
                <ul className="knowledges">
                    <li>Visual Code</li>
                    <li>Sublime Text 3</li>
                    <li>GitHub</li>
                    <li>PhpStorm</li>
                    <li>Etc...</li>
                </ul>
            </Col>
        </Row>
        <div className="block-title mt-5">
            <h3><span>My</span> Project</h3>
        </div>
        <Row>
            <Col xs={12} sm={6} md={4} className="project text-center">
                <Link rel="noopener noreferrer" to="" onClick={(e)=>{e.preventDefault(); window.open('http://thefot.xyz/')}} target={"_blank"}>
                    <img src={ironstyle} className="img-fluid" alt="project" />
                </Link>
            </Col>
            <Col xs={12} sm={6} md={4} className="project text-center">
                <Link rel="noopener noreferrer" to="" onClick={(e)=>{e.preventDefault(); window.open('http://naturix3tc.giahuy.3tc.vn/')}} target={"_blank"}>
                    <img src={naturix} className="img-fluid" alt="project" />
                </Link>
            </Col>
            <Col xs={12} sm={6} md={4} className="project text-center">
                <Link rel="noopener noreferrer" to="" onClick={(e)=>{e.preventDefault(); window.open('http://piwoo3tc.giahuy.3tc.vn/')}} target={"_blank"}>
                    <img src={piwoo} className="img-fluid" alt="project" />
                </Link>
            </Col>
        </Row>
    </section>
);