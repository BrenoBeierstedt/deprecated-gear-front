// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
//import { Row, Col, Card, Input, Button } from 'react-materialize';
// Importando o componenet UserProfile
//import UserProfile from '../user_profile/user_profile'

const VehiTranfer = () => (
    <div className="page-wrapper">


        <div className="row page-titles">
            <div className="col-md-5 align-self-center">
                <h3 className="text-primary">Transferência de veiculo</h3></div>
            <div className="col-md-7 align-self-center">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="javascript:void(0)">Home</a></li>
                    <li className="breadcrumb-item active">Transferência de veiculo</li>
                </ol>
            </div>
        </div>

        <div className="container-fluid ">


            <div className="masonry-item col-md-10  ">
                <div className="bgc-white p-20 bd  ">

                    <div className="mT-30 ">
                        <form className="container  " id="needs-validation" noValidate>
                            <div className="card ">
                                <div className="card-body">
                                    <div className="card-title">
                                        <h4>Dados complementares </h4>

                                    </div>
                                    <div className="row ">
                                        <div className="col-md-6 mb-3 ">

                                            <label className="fw-500 " htmlFor="validationCustom01">Placa</label>
                                            <input type="text" className="form-control text-center"
                                                   id="validationCustom01" required></input>
                                        </div>

                                    </div>
                                    <div className="row">

                                        <div className="col-md-6 mb-3">

                                            <label className="fw-500 " htmlFor="validationCustom01">Novo Dono</label>
                                            <input type="text" className="form-control text-center"
                                                   id="validationCustom02" required></input>
                                        </div>

                                    </div>
                                    <div className="row">

                                        <div className="col-md-6 mb-3">
                                            <div className="checkbox text-center">
                                                <label>
                                                    <input type="checkbox"> Sem novo dono</input>
                                                </label>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </div>


                            <div className="col-md-12 mb-3 text-right">
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

export default VehiTranfer;