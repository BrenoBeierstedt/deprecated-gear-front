// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
//import { Row, Col, Card, Input, Button } from 'react-materialize';
// Importando o componenet UserProfile
//import UserProfile from '../user_profile/user_profile'

const ServInProEdit = () => (
    <div className="page-wrapper">

        <div className="row page-titles">
            <div className="col-md-5 align-self-center">
                <h3 className="text-primary">Serviço em progresso</h3></div>
            <div className="col-md-7 align-self-center">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="javascript:void(0)">Home</a></li>

                    <li className="breadcrumb-item active">Serviço em progresso</li>
                </ol>
            </div>
        </div>

        <div className="container-fluid">


            <div className="masonry-item col-md-9">
                <div className="bgc-white p-20 bd">

                    <div className="mT-30">
                        <form className="container" id="needs-validation" noValidate>
                            <div className="card ">
                                <div className="card-body">
                                    <div className="card-title">
                                        <h4>Dados do cliente </h4>

                                    </div>
                                    <div className="row">

                                        <div className="col-md-3 mb-3">

                                            <label className="fw-500">Nome</label>

                                            <p className="form-control-static">José </p>

                                        </div>


                                        <div className="col-md-3 mb-3">

                                            <label className="fw-500">CPF/CNPJ</label>

                                            <p className="form-control-static">928.493.034-70 </p>

                                        </div>
                                        <div className="col-md-3 mb-3">

                                            <label className="fw-500">Telefone</label>

                                            <p className="form-control-static">(48)3240-4424 </p>

                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="card ">
                                <div className="card-body">
                                    <div className="card-title">
                                        <h4>Dados do veiculo </h4>

                                    </div>
                                    <div className="row">
                                        <div className="col-md-3 mb-3">
                                            <label className="fw-500">Modelo</label>
                                            <div className="timepicker-input input-icon form-group">

                                                <p className="form-control-static"> 320i Sport </p>

                                            </div>
                                        </div>
                                        <div className="col-md-3 mb-3">
                                            <label className="fw-500">Fabricante</label>
                                            <div className="timepicker-input input-icon form-group">

                                                <p className="form-control-static"> BMW </p>

                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-3">

                                            <label className="fw-500">Placa</label>

                                            <p className="form-control-static"> xyz-1234 </p>

                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-3 mb-3">
                                            <label className="fw-500">Ano de fabricação</label>
                                            <div className="timepicker-input input-icon form-group">

                                                <p className="form-control-static"> 2017 </p>

                                            </div>
                                        </div>
                                        <div className="col-md-3 mb-3">
                                            <label className="fw-500">Ano do modelo</label>
                                            <div className="timepicker-input input-icon form-group">

                                                <p className="form-control-static"> 2017 </p>

                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-3">

                                            <label className="fw-500">Cilindrada (cm³)</label>

                                            <p className="form-control-static"> 1997 </p>

                                        </div>
                                    </div>
                                    <div className="row">

                                        <div className="col-md-3 mb-3">
                                            <div>
                                                <label className="fw-500 text-center">Combustível</label>
                                            </div>


                                            <p className="form-control-static"> Gasolina </p>

                                        </div>
                                        <div className="col-md-3 mb-3">
                                            <div>
                                                <label className="fw-500 text-center">Chassis</label>
                                            </div>


                                            <p className="form-control-static"> wba3b1108dj409100 </p>

                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="card ">
                                <div className="card-body">
                                    <div className="card-title">
                                        <h4>Dados complementares </h4>

                                    </div>
                                    <div className="row">
                                        <div className="col-md-3 mb-3">

                                            <label className="fw-500" htmlFor="validationCustom06">Odômetro</label>
                                            <input type="number" className="form-control" id="validationCustom06"/>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <div>
                                                <label className="fw-500">Tanque</label>

                                            </div>

                                            <div className="btn-group text-center">
                                                <div>
                                                    <select id="question_type"
                                                            className="btn btn-light dropdown-toggle">
                                                        <option name="zero">0</option>
                                                        <option name="quarter">1/4</option>
                                                        <option name="half">1/2</option>
                                                        <option name="halfnquarter">3/4</option>
                                                        <option name="full">1</option>
                                                    </select>
                                                    <script>
                                                        alert($("#question_type option:selected").attr('name'));
                                                    </script>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="row">
                                        <div className="col-md-9 mb-3">
                                            <div>
                                                <label className="fw-500 text-center">Acessórios</label>
                                            </div>
                                            <div className="tags-input fw-500" data-name="tags-input">
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-9 mb-3">
                                            <div>
                                                <label className="fw-500 text-center">Possíveis defeitos</label>
                                            </div>
                                            <div className="tags-input fw-500" data-name="tags-input">
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-9 mb-3">
                                            <form method="post">

                                                <label className="fw-500"
                                                       htmlFor="validationCustom06">Observações</label>
                                                <textarea className="textarea_editor form-control" rows="15"
    placeholder="Insira texto ..."
  />

                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="text-right col-md-12 mb-3">

                                <a className="btn cur-p btn-info" href="employeeList.html">Cancelar</a>


                                <button className="btn cur-p btn-success" type="submit">Salvar</button>


                            </div>
                        </form>


                    </div>
                </div>
            </div>

        </div>
        </div>
);

export default ServInProEdit;