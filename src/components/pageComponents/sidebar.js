
// Importando o React
import React from "react";

import { Link } from 'react-router-dom'
const Sidebar = () => (
    <div className="left-sidebar">

        <div className="scroll-sidebar">

            <nav className="sidebar-nav">
                <ul id="sidebarnav">
                    <li className="nav-devider"/>


                    <li><a className="has-arrow  "aria-expanded="false">
                        <i className="fa fa-male"/>
                        <span className="hide-menu">Pessoal
                        <span className="label label-rouded label-primary pull-right">2</span>
                        </span>
                    </a>
                        <ul aria-expanded="false" className="collapse">
                            <Link to="/cusList">Clientes</Link>

                            <Link to="/empList">Funcionários </Link>

                        </ul>
                    </li>

                    <li><a className="has-arrow  "  aria-expanded="false"><i
                        className="fa fa-envelope"/><span className="hide-menu">Cadastro interno</span></a>
                        <ul aria-expanded="false" className="collapse">

                            <Link to="/InvForm">Produtos</Link>
                            <Link to="/servForm">Serviços</Link>
                            <Link to="/partsForm">Peças</Link>
                            <Link to="/VehiModForm">Modelos</Link>
                        </ul>
                    </li>


                    <li><a className="has-arrow  " aria-expanded="false"><i
                        className="fa fa-level-down"/><span className="hide-menu">Relatórios</span></a>
                        <ul aria-expanded="false" className="collapse">
                            <Link to="/#">Interno</Link>
                            <Link to="/#">Externo</Link>
                        </ul>
                    </li>
                </ul>
            </nav>

        </div>

    </div>



);

export default Sidebar;
