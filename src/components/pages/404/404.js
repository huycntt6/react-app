import React from 'react';
import './err404.scss';

const err404 = ()=> {
    return(
        <section className="error-404">
            <div className="error-container">
                <h1 className="error-heading">404</h1>
                <p className="error-subheading">Không tìm thấy trang này!</p>
            </div>
        </section>
    );
}


export default err404;