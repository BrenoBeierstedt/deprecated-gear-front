// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
//import { Row, Col, Card, Input, Button } from 'react-materialize';
// Importando o componenet UserProfile
//import UserProfile from '../user_profile/user_profile'

const PartsForm = () => (
    <div class="page-wrapper">

        <div class="row page-titles">
            <div class="col-md-5 align-self-center">
                <h3 class="text-primary">Cadastro de peças</h3> </div>
            <div class="col-md-7 align-self-center">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="javascript:void(0)">Home</a></li>
                    <li class="breadcrumb-item active">Cadastro de peças</li>
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
                                    <div class="row">
                                        <div class="col-md-6 mb-3">

                                            <label class="fw-500" >Código</label>
                                            <div class="col-md-9">
                                                <p class="form-control-static">12331 </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6 mb-3">

                                            <label class="fw-500" for="validationCustom02">Descrição</label>
                                            <input type="number" class="form-control" id="validationCustom02"   required></input>
                                        </div>
                                        <div class="col-md-6 mb-3">

                                            <label class="fw-500" for="validationCustom20">Fornecedor</label>
                                            <input type="number" class="form-control" id="validationCustom20"   required></input>
                                        </div>

                                    </div>
                                    <div class="row">
                                        <div class="col-md-3 mb-3">
                                            <label class="fw-500" >Estado</label>
                                            <div class="btn-group">
                                                <div>
                                                    <select id="question_type1" class="btn btn-light dropdown-toggle">
                                                        <option name="fisica">Novo</option>
                                                        <option name="juricida">Usado</option>
                                                        <option name="juricida">Recondicionado</option>
                                                    </select>
                                                    <script>
                                                        alert($("#question_type option:selected").attr('name'));
                                                    </script>
                                                </div>
                                            </div>



                                        </div>
                                        <div class="col-md-3 mb-3">

                                            <label class="fw-500" for="validationCustom21">Numeração</label>
                                            <input type="number" class="form-control" id="validationCustom21"   required></input>
                                        </div>






                                        <div class="col-md-3 mb-3">

                                            <label class="fw-500" for="validationCustom06">Preço</label>
                                            <input  type="number" class="form-control" id="validationCustom06" placeholder=""  required></input>

                                        </div>

                                        <div class="col-md-3 mb-3">
                                            <label class="fw-500" for="validationCustom07">Estoque atual</label>

                                            <input type="number" class="form-control" id="validationCustom07" placeholder=""></input>
                                            <div class="invalid-feedback"> Please provide last name.</div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                    <div class="text-right">
                        <a class="btn cur-p btn-info m-b-10 m-l-5" href="employeeList.html">Cancelar</a>



                        <button class="btn cur-p btn-success m-b-10 m-l-5" type="submit">Salvar</button>

                    </div>


                </form>


            </div>
        </div>
    </div>
        </div>
    </div>












);

export default PartsForm;