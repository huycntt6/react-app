import React from "react";
import './style.scss';

export default ({ children }) => {
    return (
        <div className="container main">
            <div className="row">
                <div className="col-lg-4 info-content">
                    <div className="top">
                        <div className="top-photo">
                            <img alt="avatar" draggable="false" src="//lmpixels.com/wp/breezycv-wp-lin/demo2/wp-content/uploads/sites/2/2020/06/main_photo.jpg" />
                        </div>
                        <div className="top-title">
                            <h2>Hoang Van Huy</h2>
                            <h4>Frontend-developer</h4>
                        </div>
                    </div>
                    <div className="cv-button">
                            <a href="https://www.google.com" className="btn btn-primary">Download CV</a>
                    </div>
                </div>
                <div className="col-lg-8 content-area">
                    { children }
                </div>
            </div>
        </div>
    );
}