
// Importando o React
import React from "react";

import { Link } from 'react-router-dom'
import MnfModelList from "../vehicle/models/mnf/MnfModelList";

const Sidebar = () => (
    <div className="left-sidebar">

        <div className="scroll-sidebar">

            <nav className="sidebar-nav">
                <ul id="sidebarnav">

                    <li className="nav-devider"/>



                    <li><a className="has-arrow  " href="#" aria-expanded="false"><i
                        className="fa fa-envelope"/><span className="hide-menu">Serviço</span></a>
                        <ul aria-expanded="false" className="collapse">
                            <Link to="/ServInProForm">Novo serviço</Link>
                            <Link to="/ServInProList">Serviços em andamento</Link>
                            <Link to="/ServList">Serviços comuns</Link>


                        </ul>
                    </li>

                    <li><a className="has-arrow " href="javascript:void(0);"  aria-expanded="false">
                        <i className="fa fa-male" />
                        <span className="hide-menu">Pessoal
                        <span className="label label-rouded label-primary pull-right">2</span>
                        </span>
                    </a>
                        <ul aria-expanded="false" className="collapse">

                            <li><a className="has-arrow" href="javascript:void(0);" aria-expanded="false">Clientes</a>
                                <ul aria-expanded="false" className="collapse">
                                    <Link to="/cusList">Clientes</Link>
                                    <li><Link to="/cvnList">Veiculos</Link> </li>


                                </ul>
                            </li>
                            <Link to="/empList">Funcionários </Link>

                        </ul>
                    </li>

                    <li><a className="has-arrow  "  href="#" aria-expanded="false"><i
                        className="fa fa-envelope"/><span className="hide-menu">Cadastro interno</span></a>
                        <ul aria-expanded="false" className="collapse">
                            <li><a className="has-arrow" href="#" aria-expanded="false">Inventário</a>
                                <ul aria-expanded="false" className="collapse">
                                    <Link to="/proList">Produtos</Link>
                                    <Link to="/partsList">Peças</Link>

                                </ul>
                            </li>

                            <li><a className="has-arrow  "href="#" aria-expanded="false">
                                <span className="hide-menu" >Modelos</span></a>
                                <ul aria-expanded="false" className="collapse">

                                    <Link to="/mnflist">Marcas</Link>
                                    <Link to="/vehiModelList">Veículos</Link>
                                </ul>
                            </li>

                        </ul>
                    </li>



                    <li><a className="has-arrow  " href="#" aria-expanded="false"><i
                        className="fa fa-level-down"/><span className="hide-menu">Relatórios</span></a>
                        <ul aria-expanded="false" className="collapse">
                            <Link to="/IntRep">Interno</Link>
                            <Link to="/ExtRep">Externo</Link>
                        </ul>
                    </li>
                    <li><a className="has-arrow  " aria-expanded="false"><i
                        className="fa fa-level-down"/><span className="hide-menu">T.I</span></a>
                        <ul aria-expanded="false" className="collapse">
                            <Link to="/UserForm">Usuários</Link>

                        </ul>
                    </li>
                </ul>
            </nav>

        </div>

    </div>



);

export default Sidebar;
