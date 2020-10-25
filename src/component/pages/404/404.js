import React from 'react';
import './err404.scss';

export default ()=> {
    return (
        <section className="error-404 d-flex justify-content-center align-items-center">
            <h1 className="error-heading">404</h1>
            <p className="error-subheading">Page Not Found!</p>
        </section>
    );
}