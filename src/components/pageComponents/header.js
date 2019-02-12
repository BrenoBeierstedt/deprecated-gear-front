// Importantando o React
import React from "react";
// Importando os components necessárias da lib react-materialize
//import { Navbar, NavItem, Row} from 'react-materialize';
// Importando o Component NavLink da nossa lib de rotas
//import { NavLink } from 'react-router-dom'




const Header = () => (
    <div className="header">
        <nav className="navbar top-navbar navbar-expand-md navbar-light">

            <div className="navbar-header">
                <a className="navbar-brand" href="/">

                    <b><img src="images/logo.png" alt="homepage" className="dark-logo"/></b>


                    <span><img src="images/logo-text.png" alt="homepage" className="dark-logo"/></span>
                </a>
            </div>

            <div className="navbar-collapse">

                <ul className="navbar-nav mr-auto mt-md-0">

                    <li className="nav-item"><a className="nav-link nav-toggler hidden-md-up text-muted  "
                                                href="javascript:void(0)"><i className="mdi mdi-menu"></i></a></li>
                    <li className="nav-item m-l-10"><a className="nav-link sidebartoggler hidden-sm-down text-muted  "
                                                       href="javascript:void(0)"><i className="ti-menu"></i></a></li>



                </ul>

                <ul className="navbar-nav my-lg-0">


                    <li className="nav-item hidden-sm-down search-box"><a
                        className="nav-link hidden-sm-down text-muted  " href="javascript:void(0)"><i
                        className="ti-search"></i></a>
                        <form className="app-search">
                            <input type="text" className="form-control" placeholder="Search here"></input>
                            <a className ="srh-btn"><i className="ti-close"></i></a>
                        </form>
                    </li>

                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle text-muted text-muted  " href="#" data-toggle="dropdown"
                           aria-haspopup="true" aria-expanded="false"> <i className="fa fa-bell"></i>
                            <div className="notify"><span className="heartbit"></span> <span className="point"></span>
                            </div>
                        </a>
                        <div className="dropdown-menu dropdown-menu-right mailbox animated zoomIn">
                            <ul>
                                <li>
                                    <div className="drop-title">Notifications</div>
                                </li>
                                <li>
                                    <div className="message-center">

                                        <a href="#">
                                            <div className="btn btn-danger btn-circle m-r-10"><i
                                                className="fa fa-link"></i></div>
                                            <div className="mail-contnet">
                                                <h5>This is title</h5> <span className="mail-desc">Just see the my new admin!</span>
                                                <span className="time">9:30 AM</span>
                                            </div>
                                        </a>

                                        <a href="#">
                                            <div className="btn btn-success btn-circle m-r-10"><i
                                                className="ti-calendar"></i></div>
                                            <div className="mail-contnet">
                                                <h5>This is another title</h5> <span className="mail-desc">Just a reminder that you have event</span>
                                                <span className="time">9:10 AM</span>
                                            </div>
                                        </a>

                                        <a href="#">
                                            <div className="btn btn-info btn-circle m-r-10"><i
                                                className="ti-settings"></i></div>
                                            <div className="mail-contnet">
                                                <h5>This is title</h5> <span className="mail-desc">You can customize this template as you want</span>
                                                <span className="time">9:08 AM</span>
                                            </div>
                                        </a>

                                        <a href="#">
                                            <div className="btn btn-primary btn-circle m-r-10"><i
                                                className="ti-user"></i></div>
                                            <div className="mail-contnet">
                                                <h5>This is another title</h5> <span className="mail-desc">Just see the my admin!</span>
                                                <span className="time">9:02 AM</span>
                                            </div>
                                        </a>
                                    </div>
                                </li>
                                <li>
                                    <a className="nav-link text-center" href="javascript:void(0);"> <strong>Check all
                                        notifications</strong> <i className="fa fa-angle-right"></i> </a>
                                </li>
                            </ul>
                        </div>
                    </li>

                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle text-muted  " href="#" id="2" data-toggle="dropdown"
                           aria-haspopup="true" aria-expanded="false"> <i className="fa fa-envelope"></i>
                            <div className="notify"><span className="heartbit"></span> <span className="point"></span>
                            </div>
                        </a>
                        <div className="dropdown-menu dropdown-menu-right mailbox animated zoomIn" aria-labelledby="2">
                            <ul>
                                <li>
                                    <div className="drop-title">You have 4 new messages</div>
                                </li>
                                <li>
                                    <div className="message-center">

                                        <a href="#">
                                            <div className="user-img">
                                                <img src="images/users/5.jpg" alt="user" className="img-circle"/>
                                                <span className="profile-status online pull-right"></span>
                                            </div>
                                            <div className="mail-contnet">
                                                <h5>Michael Qin</h5> <span
                                                className="mail-desc">Just see the my admin!</span>
                                                <span className="time">9:30 AM</span>
                                            </div>
                                        </a>

                                        <a href="#">
                                            <div className="user-img">
                                                <img src="" alt="user" className="img-circle"/>
                                                <span className="profile-status busy pull-right">

                                                </span>
                                            </div>
                                            <div className="mail-contnet">
                                                <h5>John Doe</h5> <span className="mail-desc">I've sung a song! See you at</span>
                                                <span className="time">9:10 AM</span>
                                            </div>
                                        </a>
                                        <a href="#">
                                            <div className="user-img">
                                                <img src="images/users/3.jpg" alt="user" className="img-circle"/>
                                                <span
                                                    className="profile-status away pull-right"></span>
                                            </div>
                                            <div className="mail-contnet">
                                                <h5>Mr. John</h5> <span className="mail-desc">I am a singer!</span>
                                                <span className="time">9:08 AM</span>
                                            </div>
                                        </a>
                                        <a href="#">
                                            <div className="user-img">
                                                <img src="images/users/4.jpg" alt="user" className="img-circle"/>
                                                <span className="profile-status offline pull-right"></span>
                                            </div>
                                            <div className="mail-contnet">
                                                <h5>Michael Qin</h5> <span
                                                className="mail-desc">Just see the my admin!</span> <span
                                                className="time">9:02 AM</span>
                                            </div>
                                        </a>
                                    </div>
                                </li>
                                <li>
                                    <a className="nav-link text-center" href="javascript:void(0);"> <strong>See all
                                        e-Mails</strong> <i className="fa fa-angle-right"></i> </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle text-muted  " href="#" data-toggle="dropdown"
                           aria-haspopup="true" aria-expanded="false"><img src="images/users/5.jpg" alt="user"
                                                                           className="profile-pic"/></a>
                        <div className="dropdown-menu dropdown-menu-right animated zoomIn">
                            <ul className="dropdown-user">
                                <li><a href="#"><i className="ti-user"></i> Profile</a></li>
                                <li><a href="#"><i className="ti-wallet"></i> Balance</a></li>
                                <li><a href="#"><i className="ti-email"></i> Inbox</a></li>
                                <li><a href="#"><i className="ti-settings"></i> Setting</a></li>
                                <li><a href="/logout"><i className="fa fa-power-off"></i> Logout</a></li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
);
export default Header;