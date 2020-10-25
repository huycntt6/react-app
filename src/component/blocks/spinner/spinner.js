import React from 'react';

import './spinner.scss';

export default () => (
    <div className="loading">
        <div className="spinner">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
        </div>
    </div>
);