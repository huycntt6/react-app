import React from 'react';
import { Link } from 'react-router-dom';
import './menu.scss';
import * as $ from 'jquery/dist/jquery.min.js';
import Draggable from 'react-draggable';

class Menu extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            isShow: false,
            width: 0,
            isDrag: false,
            icon: 'fas fa-bars',
            animate: ''
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
        $('.main-menu ul li a').click(()=>{
            this.setState({
                isShow: false
            });
            $('.main-menu ul li').css('transform', 'translateX(0)');
            this.setState({icon: 'fas fa-bars'});
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

    onStart = () => {
        this.setState({animate: 'animate'});
        $('.status').html('on start');
    };
    
    onStop = () => {
        let isDragMenu = this.state.isDrag;
        let element = $('.main-menu ul li');
        if(!isDragMenu){
            let isShowMenu = !this.state.isShow;
            this.setState({isShow: isShowMenu});
            if(isShowMenu){
                element.css('transform', 'translateX('+ (this.state.width - 15 + 48) +'px)');
                this.setState({icon: 'fas fa-times'});
                this.setState({isShow: true});
            }else{
                element.css('transform', 'translateX(0)');
                this.setState({icon: 'fas fa-bars'});
            }
        }
        this.setState({isDrag: false});
        this.setState({animate: ''});
        $('.status').html('on stop');
    };

    onDrag = () => {
        this.setState({isDrag: true});
        $('.status').html('on drag');
    }

    render(){    
        return(
            <div className="header-menu">
                <div className="status">null</div>
                <Draggable onStop={this.onStop} onStart={this.onStart} onDrag={this.onDrag} defaultPosition={{x: 20, y: 20}}>
                    <button className={"bars-mobile btn btn-primary "+this.state.animate} type="button"><i className={this.state.icon}></i></button>
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