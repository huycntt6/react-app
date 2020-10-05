import React from 'react';
import { Link } from 'react-router-dom';
import './menu.scss';
import * as $ from 'jquery/dist/jquery.min.js';
import Draggable from 'react-draggable';

class Menu extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            activeDrags: 0,
            deltaPosition: {
              x: 0, y: 0
            },
            isShow: false,
            width: 0
        };
    }
    componentDidMount(){
        const wMenu = $('.main-menu').width() - 48;
        this.setState({
            width: wMenu
        });
        this.effectMenu(wMenu);
        $(window).resize(() => {
            $('.main-menu ul li').css('transform', 'translateX(0)');
            this.setState({
                isShow: false
            });
            this.effectMenu(wMenu);
        });
    }
    
    effectMenu(wMenu){
        if (window.matchMedia('(max-width: 1024px)').matches) {
            $('.main-menu').css('transform', 'translate(-'+ (wMenu+48) +'px, -50%)');
            $('.bars-mobile').css('display', 'block');
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

    // onStart = () => {
    //     this.setState({activeDrags: ++this.state.activeDrags});
    //   };
    
    // onStop = () => {
    //     this.setState({activeDrags: --this.state.activeDrags});
    // };
    handleStart(){
        // let isShow = this.state.isShow;
        // if(isShow){
        //     this.setState({
        //         isShow: false
        //     });
        //     $(this).removeClass('tran-0');
        //     $('.main-menu ul li').css('transform', 'translateX(0)');
        // }else{
        //     this.setState({
        //         isShow: true
        //     });
        //     $(this).addClass('tran-0');
        //     $('.main-menu ul li').css('transform', 'translateX('+ (this.state.width - 15 + 48) +'px)');
        // }
        // console.log(this.state.width);
    }
    render(){

        
        
        return(
            <div className="header-menu">
                <Draggable onStop={this.handleStart}>
                    <button className="bars-mobile btn btn-primary" type="button">&#9776;</button>
                </Draggable>
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
    
}

export default Menu;