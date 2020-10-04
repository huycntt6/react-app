import React from 'react';
import { Link } from 'react-router-dom';
import './menu.scss';
import * as $ from 'jquery/dist/jquery.min.js';

const Menu = () => {
    
    $(document).ready(function(){
        const wMenu = $('.main-menu').width() - 48;
        var show = false;
        effectMenu(wMenu);
        $(window).resize(() => {
            $('.main-menu ul li').css('transform', 'translateX(0)');
            show = false;
            effectMenu(wMenu);
        });
        
        $('.bars-mobile').click(function () {
            if(show){
                show = false;
                $(this).removeClass('tran-0');
                $('.main-menu ul li').css('transform', 'translateX(0)');
            }else{
                show = true;
                $(this).addClass('tran-0');
                $('.main-menu ul li').css('transform', 'translateX('+ (wMenu - 15 + 48) +'px)');
            }
        });
    });
    
    function effectMenu(wMenu){
        if (window.matchMedia('(max-width: 1024px)').matches) {
            $('.main-menu').css('transform', 'translate(-'+ (wMenu+48) +'px, -50%)');
            $('.bars-mobile').css('display', 'block');
            $('.bars-mobile').on('touchmove', function (event) {
                let x = event.originalEvent.touches[0].pageX - 18;
                let y = event.originalEvent.touches[0].pageY - 18;
                $(this).css('transform', 'translate('+x+'px,'+y+'px)');
                
            });
            $('.main-menu li').unbind();
        }else{
            $('.bars-mobile').css('display', 'none');
            $('.main-menu').css('transform', 'translate(-'+ wMenu +'px, -50%)');
            $('.main-menu li').hover(function(){
                $(this).addClass('tran-0');
                $('.main-menu ul li').css('transform', 'translateX('+ (wMenu - 15) +'px)');
            });
            $('.main-menu li').mouseleave(function(){
                $(this).removeClass('tran-0');
                $('.main-menu ul li').css('transform', 'translateX(0)');
            });
        }
    }
    
    return(
        <div className="header-menu">
            <button className="bars-mobile btn btn-primary" type="button">&#9776;</button>
            <div className="main-menu">
                
                <ul>
                    <li>
                        <Link to="/">
                            <span>Trang Chủ</span>
                            <span className="icon">
                                <i className="fas fa-home"></i>
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/about">
                            <span>Giới Thiệu</span>
                            <span className="icon">
                                <i className="fas fa-info"></i>
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact">
                            <span>Liên Hệ</span>
                            <span className="icon">
                                <i className="far fa-address-book"></i>
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/user">
                            <span>Tài Khoản</span>
                            <span className="icon">
                                <i className="fas fa-user"></i>
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/settings">
                            <span>Cài Đặt</span>
                            <span className="icon">
                                <i className="fas fa-tools"></i>
                            </span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Menu;