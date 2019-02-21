import React from "react";
import {Link} from "react-router-dom";

const ServList = () => (
    <div className="page-wrapper">

        <div className="row page-titles">
            <div className="col-md-5 align-self-center">
                <h3 className="text-primary">Serviços</h3></div>
            <div className="col-md-7 align-self-center">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">Home</li>
                    <li className="breadcrumb-item active">Serviços</li>
                </ol>
            </div>
        </div>

        <div className="container-fluid">


            <div className="row">
                <div className="col-md-10">
                    <div className="bgc-white bd bdrs-3 p-20 mB-20">
                        <div className="card ">
                            <div className="card-body">

                                <div className="row">
                                    <div className="input-group input-group-rounded col-md-8 mb-3 ">
                                        <input type="text" placeholder="Descrição" name="Search"
                                               className="form-control"></input>
                                            <span className="input-group-btn"><button
                                                className="btn btn-primary btn-group-right" type="submit"><i
                                                className="ti-search"></i></button></span>
                                    </div>
                                    <div className="text-right ">
                                        <Link className="btn cur-p btn-outline-success"
                                           to={'/ServForm'}>Cadastrar</Link>

                                    </div>
                                </div>
                                <table className="table table-striped">
                                    <thead>
                                    <tr>

                                        <th scope="col">
                                            Descrição
                                        </th>
                                        <th scope="col">
                                            Valor
                                        </th>

                                        <th scope="col">
                                            Editar
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>

                                        <td>Mark</td>
                                        <td>Otto</td>

                                        <td>
                                            <div className="peer">
                                                <a href="employeeForm.html"
                                                   className="td-n c-deep-purple-500 cH-blue-500 fsz-md p-5">
                                                    <i className="ti-pencil">
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

export default ServList;