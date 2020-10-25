import React from 'react';
import { Redirect } from 'react-router-dom';
import { toast } from 'react-toastify';

export default () => {
    toast.info('😳 Bạn đã đăng xuất!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
    localStorage.removeItem('auth-token');
    return <Redirect to="/login" />;
}