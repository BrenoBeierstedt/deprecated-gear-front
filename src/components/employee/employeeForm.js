// Importando o React
import React from "react";

import {Link} from "react-router-dom";

const EmpForm = () => (

    <div className="page-wrapper">

        <div className="row page-titles">
            <div className="col-md-5 align-self-center">
                <h3 className="text-primary">Cadastro de Funcionário</h3></div>
            <div className="col-md-7 align-self-center">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="javascript:void(0)">Home</a></li>
                    <li className="breadcrumb-item active">Cadastro de Funcionário</li>
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

                                            <label className="fw-500" htmlFor="validationCustom01">Nome completo</label>
                                            <input type="text" className="form-control" id="validationCustom01"
                                                   placeholder="Nome completo" required></input>
                                        </div>


                                        <div className="col-md-6 mb-3">

                                            <label className="fw-500" htmlFor="validationCustom02">CPF/CNPJ</label>
                                            <input type="number" className="form-control" id="validationCustom02"
                                                   placeholder="CPF ou CNPJ" required></input>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-3 mb-3">
                                            <label className="fw-500">Data de nascimento</label>
                                            <div className="timepicker-input input-icon form-group">
                                                <div className="input-group">

                                                    <input type="date" className="form-control bdc-grey-200 start-date"
                                                           placeholder="Escolha data" data-provide="datepicker"></input>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3 mb-3">
                                            <label className="fw-500">Data de inicio</label>
                                            <div className="timepicker-input input-icon form-group">
                                                <div className="input-group">

                                                    <input type="date" className="form-control bdc-grey-200 start-date"
                                                           placeholder="Escolha data" data-provide="datepicker"></input>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-3">

                                            <label className="fw-500" htmlFor="validationCustom02">Cargo</label>
                                            <input type="text" className="form-control" id="validationCustom14"
                                                   placeholder="Cargo" required></input>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-1 mb-3">

                                            <label className="fw-500" htmlFor="validationCustom01">DDD</label>
                                            <input type="number" className="form-control" id="validationCustom10"
                                                   placeholder="DDD" required></input>
                                        </div>
                                        <div className="col-md-5 mb-3">

                                            <label className="fw-500" htmlFor="validationCustom01">Telefone</label>
                                            <input type="number" className="form-control" id="validationCustom11"
                                                   placeholder="Telefone" required></input>
                                        </div>
                                        <div className="col-md-6 mb-3">

                                            <label className="fw-500" htmlFor="validationCustom02">E-mail</label>
                                            <input type="text" className="form-control" id="validationCustom09"
                                                   placeholder="exemplo@endereço.com.br" required></input>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-6 mb-3">

                                            <label className="fw-500" htmlFor="validationCustom06">Endereço</label>
                                            <input type="text" className="form-control" id="validationCustom06"
                                                   placeholder="Endereço" required></input>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label className="fw-500" htmlFor="validationCustom07">Complemento</label>

                                            <input type="text" className="form-control" id="validationCustom07"
                                                   placeholder="Complemento"></input>
                                            <div className="invalid-feedback"> Please provide last name.</div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <label className="fw-500" htmlFor="validationCustom03">Cidade</label>

                                            <input type="text" className="form-control" id="validationCustom03"
                                                   placeholder="Cidade" required></input>

                                        </div>
                                        <div className="col-md-3 mb-3">
                                            <label className="fw-500" htmlFor="validationCustom04">Estado</label>

                                            <input type="text" className="form-control" id="validationCustom04"
                                                   placeholder="Estado" required></input>
                                            <div className="invalid-feedback">Insira estado válido.</div>
                                        </div>
                                        <div className="col-md-3 mb-3">
                                            <label htmlFor="validationCustom05">CEP</label>

                                            <input type="text" className="form-control" id="validationCustom05"
                                                   placeholder="CEP" required></input>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-right">
                                <Link to="/empList" className="btn cur-p btn-info m-b-10 m-l-5">Cancelar</Link>


                                <button className="btn cur-p btn-success m-b-10 m-l-5" type="submit">Salvar</button>

                            </div>
                        </form>


                    </div>
                </div>
            </div>



        </div>
    </div>

);

export default EmpForm;