// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
//import { Row, Col, Card, Input, Button } from 'react-materialize';
// Importando o componenet UserProfile
//import UserProfile from '../user_profile/user_profile'

const IntRep = () => (
    <div className="page-wrapper">

        <div className="row page-titles">
            <div className="col-md-5 align-self-center">
                <h3 className="text-primary">Relatórios Internos</h3></div>
            <div className="col-md-7 align-self-center">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="javascript:void(0)">Home</a></li>
                    <li className="breadcrumb-item active">Relatórios Internos</li>
                </ol>
            </div>
        </div>

        <div className="container-fluid">


            <div className="card ">
                <div className="card-body">
                    <div className="card-title">
                        <h4>Dados complementares </h4>

                    </div>
                    <div className="row">
                        <div className="col-md-10">
                            <div className="bgc-white bd bdrs-3 p-20 mB-20">
                                <div className="row">
                                    <div className="input-group input-group-rounded col-md-8 mb-3 ">
                                        <input type="text" placeholder="Modelo" name="Search" className="form-control"></input>
                                            <span className="input-group-btn"><button
                                                className="btn btn-primary btn-group-right" type="submit"><i
                                                className="ti-search"></i></button></span>
                                    </div>
                                    <div className="text-right ">

                                    </div>
                                </div>
                                <table className="table table-striped">
                                    <thead>
                                    <tr>

                                        <th scope="col">
                                            Nome
                                        </th>
                                        <th scope="col">
                                            Descrição
                                        </th>

                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>

                                        <td>Mark</td>
                                        <td>Otto</td>


                                    </tr>


                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        </div>
);

export default IntRep;