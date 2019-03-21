// Importando o React
import React from "react";
import {Link} from "react-router-dom";
// Importando os components necessários da lib react-materialize
//import { Row, Col, Card, Input, Button } from 'react-materialize';
// Importando o componenet UserProfile
//import UserProfile from '../user_profile/user_profile'

const UserForm = () => (
    <div className="page-wrapper">

        <div className="row page-titles">
            <div className="col-md-5 align-self-center">
            </div>
            <div className="col-md-7 align-self-center">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">Home</li>
                    <li className="breadcrumb-item active">Dashboard</li>
                </ol>
            </div>
        </div>

        <div className="container-fluid">
            <div className="masonry-item col-md-10">
                <div className="bgc-white p-20 bd">

                    <div className="mT-30">

                        <div className="col-lg-12">
                            <div className="card">
                                <div className="card-body">
                                    <div className="card-two">
                                        <header>
                                            <div className="avatar">
                                                <img src="https://randomuser.me/api/portraits/women/21.jpg" alt="Allison Walker"/>
                                            </div>
                                        </header>

                                        <h3>Allison Walker</h3>
                                        <div className="desc">
                                            <h6>Desde</h6>
                                            <h4>email@email.com </h4>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="col-lg-12">
                            <div className="card">
                                <div className="card-body">
                                    <div className="card-content">


                                        <div className="vtabs">
                                            <ul className="nav nav-tabs tabs-vertical" role="tablist">
                                                <li className="nav-item"><a className="nav-link active show" data-toggle="tab"
                                                                            href="#home4" role="tab" aria-selected="true"><span
                                                    className="hidden-sm-up"><i className="ti-home"></i></span> <span
                                                    className="hidden-xs-down">Perfil</span> </a></li>
                                                <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#profile4"
                                                                            role="tab" aria-selected="false"><span
                                                    className="hidden-sm-up"><i className="ti-user"></i></span> <span
                                                    className="hidden-xs-down">Organizacional</span></a></li>
                                                <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#messages4"
                                                                            role="tab" aria-selected="false"><span
                                                    className="hidden-sm-up"><i className="ti-email"></i></span> <span
                                                    className="hidden-xs-down">Permissões</span></a></li>
                                            </ul>

                                            <div className="tab-content">
                                                <div className="tab-pane active show" id="home4" role="tabpanel">
                                                    <div className="p-20">
                                                        <div className="row">
                                                            <div className="col-md-6 mb-3">

                                                                <label className="fw-500"
                                                                       htmlFor="validationCustom01">Nome</label>
                                                                <input type="text" className="form-control"
                                                                       id="validationCustom01" placeholder="" required/>
                                                            </div>


                                                            <div className="col-md-6 mb-3">

                                                                <label className="fw-500"
                                                                       htmlFor="validationCustom02">E-mail</label>
                                                                <input type="number" className="form-control"
                                                                       id="validationCustom02" placeholder="" required/>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-md-6 mb-3">

                                                                <label className="fw-500"
                                                                       htmlFor="validationCustom02">Senha</label>
                                                                <input type="password" className="form-control"
                                                                       id="validationCustom14" placeholder="" required/>
                                                            </div>
                                                            <div className="col-md-6 mb-3">

                                                                <label className="fw-500" htmlFor="validationCustom02">Confirme
                                                                    senha</label>
                                                                <input type="password" className="form-control"
                                                                       id="validationCustom15" placeholder="" required/>
                                                            </div>
                                                        </div>
                                                        <div className="row">

                                                            <div className="col-md-6 mb-3">
                                                                <div>
                                                                    <label className="fw-500 text-center"
                                                                           htmlFor="validationCustom01">Situação
                                                                        Usuário</label>
                                                                </div>

                                                                <div className="btn-group text-center">
                                                                    <div>
                                                                        <select id="question_type"
                                                                                className="btn btn-light dropdown-toggle">
                                                                            <option name="fisica">Ativo</option>
                                                                            <option name="fisica">Inativo</option>

                                                                        </select>
                                                                        <script>
                                                                            alert($("#question_type
                                                                            option:selected").attr('name'));
                                                                        </script>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="tab-pane p-20" id="profile4" role="tabpanel">2</div>
                                                <div className="tab-pane p-20" id="messages4" role="tabpanel">3</div>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="clearfix"/>

                                </div>
                            </div>


                            <div className="text-right">
                                <Link className="btn cur-p btn-info m-b-10 m-l-5" to="/cusList"> Cancelar</Link>


                                <button className="btn cur-p btn-success m-b-10 m-l-5" type="submit">Salvar</button>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>


);

export default UserForm;