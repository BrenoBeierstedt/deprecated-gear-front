// Importando o React
import React from "react";
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
                    <li className="breadcrumb-item"><a href="javascript:void(0)">Home</a></li>
                    <li className="breadcrumb-item active">Dashboard</li>
                </ol>
            </div>
        </div>

        <div className="container-fluid">


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

                            <div className="inbox-leftbar">


                                <div className="mail-list mt-4">
                                    <a className="list-group-item border-0 " href="#"><i
                                        className="ti ti-user font-18 align-middle mr-2"></i>Perfil</a>
                                    <a className="list-group-item border-0" href="#"><i
                                        className="ti ti-world font-18 align-middle mr-2"></i>Organizacional</a>
                                    <a className="list-group-item border-0" href="#"><i
                                        className="ti ti-lock font-18 align-middle mr-2"></i>Permissões</a>

                                </div>


                            </div>


                            <div className="inbox-rightbar">

                                <div className="">
                                    <div className="mt-4">
                                        <div className="">
                                            <ul className="user-form">


                                                <form className="container" id="needs-validation" noValidate>
                                                    <div className="row">
                                                        <div className="col-md-6 mb-3">

                                                            <label className="fw-500"
                                                                   htmlFor="validationCustom01">Nome</label>
                                                            <input type="text" className="form-control"
                                                                   id="validationCustom01" placeholder="" required></input>
                                                        </div>


                                                        <div className="col-md-6 mb-3">

                                                            <label className="fw-500"
                                                                   htmlFor="validationCustom02">E-mail</label>
                                                            <input type="number" className="form-control"
                                                                   id="validationCustom02" placeholder="" required></input>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-6 mb-3">

                                                            <label className="fw-500"
                                                                   htmlFor="validationCustom02">Senha</label>
                                                            <input type="password" className="form-control"
                                                                   id="validationCustom14" placeholder="" required></input>
                                                        </div>
                                                        <div className="col-md-6 mb-3">

                                                            <label className="fw-500" htmlFor="validationCustom02">Confirme
                                                                senha</label>
                                                            <input type="password" className="form-control"
                                                                   id="validationCustom15" placeholder="" required></input>
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


                                                    <div className="text-right">
                                                        <a className="btn cur-p btn-info"
                                                           href="employeeList.html m-b-10 m-l-5">Cancelar</a>


                                                        <button className="btn cur-p btn-success m-b-10 m-l-5" type="submit">Salvar
                                                        </button>

                                                    </div>
                                                </form>


                                            </ul>
                                        </div>

                                    </div>

                                </div>


                            </div>

                            <div className="clearfix"></div>

                        </div>
                    </div>
                </div>
            </div>
        </div>


        </div>
);

export default UserForm;