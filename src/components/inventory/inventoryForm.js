// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
//import { Row, Col, Card, Input, Button } from 'react-materialize';
// Importando o componenet UserProfile
//import UserProfile from '../user_profile/user_profile'

const InvForm = () => (
    <div className="page-wrapper">

        <div className="row page-titles">
            <div className="col-md-5 align-self-center">
                <h3 className="text-primary">Cadastro de produtos</h3></div>
            <div className="col-md-7 align-self-center">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="javascript:void(0)">Home</a></li>
                    <li className="breadcrumb-item active">Cadastro de produtos</li>
                </ol>
            </div>
        </div>

        <div className="container-fluid">


            <div className="masonry-item col-md-10">
                <div className="bgc-white p-20 bd">

                    <div className="mT-30">
                        <form className="container" id="needs-validation" noValidate>
                            <div className="card ">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-6 mb-3">

                                            <label className="fw-500">Código</label>
                                            <div className="col-md-9">
                                                <p className="form-control-static">12331 </p>
                                            </div>
                                        </div>


                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 mb-3">

                                            <label className="fw-500" htmlFor="validationCustom02">Descrição</label>
                                            <input type="number" className="form-control" id="validationCustom02"
                                                   required></input>
                                        </div>
                                        <div className="col-md-6 mb-3">

                                            <label className="fw-500" htmlFor="validationCustom20">Fornecedor</label>
                                            <input type="number" className="form-control" id="validationCustom20"
                                                   required></input>
                                        </div>

                                    </div>
                                    <div className="row">
                                        <div className="col-md-3 mb-3">
                                            <div>
                                                <label className="fw-500">Derivação</label>
                                            </div>
                                            <div className="btn-group">
                                                <div>
                                                    <select id="question_type1"
                                                            className="btn btn-light dropdown-toggle">
                                                        <option name="fisica"></option>
                                                        <option name="juricida">Grande</option>
                                                        <option name="juricida">Médio</option>
                                                        <option name="juricida">Pequeno</option>
                                                    </select>
                                                    <script>
                                                        alert($("#question_type option:selected").attr('name'));
                                                    </script>
                                                </div>
                                            </div>


                                        </div>
                                        <div className="col-md-3 mb-3">
                                            <div>
                                                <label className="fw-500">Tipo de medição</label>
                                            </div>
                                            <div className="btn-group">
                                                <div>
                                                    <select id="question_type"
                                                            className="btn btn-light dropdown-toggle">
                                                        <option name="fisica">unidade</option>
                                                        <option name="juricida">par</option>
                                                        <option name="juricida">litro</option>
                                                        <option name="juricida">Kg</option>
                                                    </select>
                                                    <script>
                                                        alert($("#question_type option:selected").attr('name'));
                                                    </script>
                                                </div>
                                            </div>


                                        </div>


                                        <div className="col-md-2 mb-3">
                                            <div>
                                                <label className="fw-500" htmlFor="validationCustom06">Preço</label>
                                            </div>

                                            <input type="number" className="form-control" id="validationCustom06"
                                                   placeholder="" required></input>

                                        </div>
                                        <div className="col-md-2 mb-3">
                                            <div>
                                                <label className="fw-500" htmlFor="validationCustom07">Estoque
                                                    min.</label>
                                            </div>
                                            <input type="number" className="form-control" id="validationCustom07"
                                                   placeholder=""></input>
                                            <div className="invalid-feedback"> Please provide last name.</div>
                                        </div>
                                        <div className="col-md-2 mb-3">
                                            <div>
                                                <label className="fw-500" htmlFor="validationCustom21">Estoque
                                                    atual</label>
                                            </div>
                                            <input type="number" className="form-control " id="validationCustom21"
                                                   placeholder=""></input>
                                            <div className="invalid-feedback"> Please provide last name.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="text-right">
                                <a className="btn cur-p btn-info m-b-10 m-l-5" href="employeeList.html">Cancelar</a>


                                <button className="btn cur-p btn-success m-b-10 m-l-5" type="submit">Salvar</button>

                            </div>

                        </form>


                    </div>
                </div>
            </div>


        </div>
    </div>

);

export default InvForm;