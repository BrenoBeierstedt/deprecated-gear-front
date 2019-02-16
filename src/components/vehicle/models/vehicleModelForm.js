import React ,{Component} from "react";

import ApiProvider from './../../../gearUtils/util'

import {Link} from "react-router-dom";


const VehiModForm = () => (
    <div className="page-wrapper">

        <div className="row page-titles">
            <div className="col-md-5 align-self-center">
                <h3 className="text-primary">Cadastro de modelos</h3></div>
            <div className="col-md-7 align-self-center">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="javascript:void(0)">Home</a></li>
                    <li className="breadcrumb-item active">Cadastro de modelos</li>
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
                                    <div className="card-title">
                                        <h4>Dados complementares </h4>

                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 mb-3">

                                            <label className="fw-500" htmlFor="validationCustom01">Fabricante</label>
                                            <input type="text" className="form-control" id="validationCustom01"
                                                   placeholder="BMW" required/>
                                        </div>


                                        <div className="col-md-6 mb-3">

                                            <label className="fw-500" htmlFor="validationCustom02">Modelo</label>
                                            <input type="number" className="form-control" id="validationCustom02"
                                                   placeholder="320i Sport" required/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-3 mb-3">
                                            <label className="fw-500">Ano de fabricação</label>
                                            <div className="timepicker-input input-icon form-group">
                                                <div className="input-group">

                                                    <input type="date" className="form-control bdc-grey-200 start-date"
                                                           data-provide="datepicker"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3 mb-3">
                                            <label className="fw-500">Ano do modelo</label>
                                            <div className="timepicker-input input-icon form-group">
                                                <div className="input-group">

                                                    <input type="date" className="form-control bdc-grey-200 start-date"
                                                           data-provide="datepicker"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-3">

                                            <label className="fw-500" htmlFor="validationCustom02">Cilindrada
                                                (cm³)</label>
                                            <input type="text" className="form-control" id="validationCustom14"
                                                   placeholder="Cm³" required/>
                                        </div>
                                    </div>
                                    <div className="row">

                                        <div className="col-md-6 mb-3">
                                            <div>
                                                <label className="fw-500 text-center"
                                                       htmlFor="validationCustom01">Combustível</label>
                                            </div>

                                            <div className="btn-group text-center">
                                                <div>
                                                    <select id="question_type"
                                                            className="btn btn-light dropdown-toggle">
                                                        <option name="fisica">Gasolina</option>
                                                        <option name="fisica">Etanol</option>
                                                        <option name="juricida">Diesel</option>
                                                        <option name="juricida">Flex</option>
                                                    </select>
                                                    <script>
                                                        alert($("#question_type option:selected").attr('name'));
                                                    </script>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3 mb-3">

                                            <label className="fw-500" htmlFor="validationCustom02">Potência</label>
                                            <input type="number" className="form-control" id="validationCustom09"
                                                   placeholder="CV" required/>
                                        </div>

                                        <div className="row">
                                            <div className="col-10">

                                                <h4 className="card-title">Imagem</h4>

                                                <form action="#" className="dropzone">
                                                    <div className="fallback">
                                                        <input name="file" type="file" multiple/>
                                                    </div>
                                                </form>

                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </div>

                            <div className="text-right">
                                <Link className="btn cur-p btn-info m-b-10 m-l-5" to={"/vehiModelList"}>Cancelar</Link>


                                <button className="btn cur-p btn-success m-b-10 m-l-5" type="submit">Salvar</button>

                            </div>
                        </form>


                    </div>
                </div>
            </div>


        </div>
    </div>
);

export default VehiModForm;