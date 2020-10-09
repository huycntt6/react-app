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
            icon: 'fa-bars',
            animate: '',
            deltaPosition: {
                x: 0, y: 0
            }
        };
    }

    componentDidMount(){
        const wMenu = $('.main-menu').width() - 48;
        const eMenu = $('.main-menu li');
        this.setState({
            width: wMenu
        });
        this.effectMenu(wMenu, eMenu);
        $(window).resize(() => {
            eMenu.css('transform', 'translateX(0)');
            this.setState({
                isShow: false
            });
            this.setState({icon: 'fa-bars'});
            this.effectMenu(wMenu, eMenu);
        });
        
    }
    
    effectMenu(wMenu, eMenu){
        if (window.matchMedia('(max-width: 1024px)').matches) {
            $('.main-menu').css('transform', 'translate(-'+ (wMenu+48) +'px, -50%)');
            $('.bars-mobile').css('display', 'block');
            eMenu.unbind();
            $(eMenu).children().click(()=>{
                this.setState({
                    isShow: false
                });
                eMenu.css('transform', 'translateX(0)');
                this.setState({icon: 'fa-bars'});
            });
        }else{
            $('.bars-mobile').css('display', 'none');
            $('.main-menu').css('transform', 'translate(-'+ wMenu +'px, -50%)');
            eMenu.hover(function(){
                $(this).addClass('tran-0');
                eMenu.css('transform', 'translateX('+ (wMenu - 15) +'px)');
            }).mouseleave(function(){
                $(this).removeClass('tran-0');
                eMenu.css('transform', 'translateX(0)');
            });
        }
    }

    onStart = () => {
        this.setState({animate: 'animate'});
    };
    
    onStop = () => {
        let isDragMenu = this.state.isDrag;
        let element = $('.main-menu ul li');
        if(!isDragMenu){
            let isShowMenu = !this.state.isShow;
            this.setState({isShow: isShowMenu});
            if(isShowMenu){
                element.css('transform', 'translateX('+ (this.state.width - 15 + 48) +'px)');
                this.setState({icon: 'fa-times'});
                this.setState({isShow: true});
            }else{
                element.css('transform', 'translateX(0)');
                this.setState({icon: 'fa-bars'});
            }
        }
        this.setState({isDrag: false});
        this.setState({animate: ''});
    };

    handleDrag = (e, ui) => {
        const {x, y} = this.state.deltaPosition;
        this.setState({
          deltaPosition: {
            x: x + ui.deltaX,
            y: y + ui.deltaY,
          }
        });
        const newX = this.state.deltaPosition.x;
        const newY = this.state.deltaPosition.y;
        if(newX !== x || newY !== y){
            this.setState({isDrag: true});
        }
    };

    render(){    
        return(
            <div className="header-menu">
                <Draggable
                onStop={this.onStop}
                onStart={this.onStart}
                onDrag={this.handleDrag}
                handle=".fas"
                defaultPosition={{x: 20, y: 20}}>
                    <button
                    className={"bars-mobile "+this.state.animate}>
                        <i className={"fas "+this.state.icon}></i>
                    </button>
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