// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
//import { Row, Col, Card, Input, Button } from 'react-materialize';
// Importando o componenet UserProfile
//import UserProfile from '../user_profile/user_profile'

const ServInProList = () => (
    <div className="page-wrapper">

        <div className="row page-titles">
            <div className="col-md-5 align-self-center">
                <h3 className="text-primary">Serviços em andamento</h3></div>
            <div className="col-md-7 align-self-center">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="javascript:void(0)">Home</a></li>
                    <li className="breadcrumb-item active">Serviços em andamento</li>
                </ol>
            </div>
        </div>
    <div class="container-fluid">

        <div class="card ">
            <div class="card-body">


                <div class="row">
                    <div class="col-md-10">
                        <div class="bgc-white bd bdrs-3 p-20 mB-20">
                            <div class="row">
                                <div class="input-group input-group-rounded col-md-8 mb-3 ">
                                    <input type="text" placeholder="Buscar" name="Search" class="form-control"></input>
                                        <span class="input-group-btn"><button class="btn btn-primary btn-group-right" type="submit"><i class="ti-search"></i></button></span>
                                </div>
                                <div class="text-right ">
                                    <a class="btn cur-p btn-outline-success" href="employeeForm.html">Cadastrar</a>

                                </div>
                            </div>
                            <table class="table table-striped">
                                <thead>
                                <tr>

                                    <th scope="col">
                                        Cliente</th>
                                    <th scope="col">
                                        Telefone</th>
                                    <th scope="col">
                                        Veiculo</th>
                                    <th scope="col">
                                        Placa</th>
                                    <th scope="col">
                                        Editar</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>

                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    <td>@mdo</td>
                                    <td><div class="peer">
                                        <a href="employeeForm.html" class="td-n c-deep-purple-500 cH-blue-500 fsz-md p-5">
                                            <i class="ti-pencil">
                                            </i>
                                        </a>


                                    </div>
                                    </td>
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

export default ServInProList;