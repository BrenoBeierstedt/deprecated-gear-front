// Importantando o React
import React from "react";
// Importando os components necessárias da lib react-materialize
import { Link } from 'react-router-dom'



const Header = () => (
    <div className="header">
        <nav className="navbar top-navbar navbar-expand-md navbar-light">

            <div className="navbar-header">
                <Link  className="navbar-brand" to={"/"}>

                    <b><img src="images/logo.png" alt="homepage" className="dark-logo"/></b>



                </Link>
            </div>

            <div className="navbar-collapse">

                <ul className="navbar-nav mr-auto mt-md-0">

                    <li className="nav-item"><a className="nav-link nav-toggler hidden-md-up text-muted  "
                                                href="javascript:void(0)"><i className="mdi mdi-menu"/></a></li>
                    <li className="nav-item m-l-10"><a className="nav-link sidebartoggler hidden-sm-down text-muted  "
                                                       href="javascript:void(0)"><i className="ti-menu"/></a></li>



                </ul>

                <ul className="navbar-nav my-lg-0">




                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle text-muted  " href="#" data-toggle="dropdown"
                           aria-haspopup="true" aria-expanded="false"><img src="images/users/5.jpg" alt="user"
                                                                           className="profile-pic"/></a>
                        <div className="dropdown-menu dropdown-menu-right animated zoomIn">
                            <ul className="dropdown-user">

                                <li><a href="/logout"><i className="fa fa-power-off"/> Logout</a></li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
);
export default Header;
