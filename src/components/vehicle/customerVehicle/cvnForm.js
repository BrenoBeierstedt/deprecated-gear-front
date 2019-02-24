// Importando o React
import React, {Component} from "react";
import {Link} from "react-router-dom";


import CusSearch from './../../customer/customerData/dataSearch.js'

export default class VehiCusForm extends Component {

    render() {
        return (
            <div className="page-wrapper">

                <div className="row page-titles">
                    <div className="col-md-5 align-self-center">
                        <h3 className="text-primary">Cadastro de veiculos</h3> </div>
                    <div className="col-md-7 align-self-center">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">Home</li>
                            <li className="breadcrumb-item active">Clientes</li>
                            <li className="breadcrumb-item active">Veiculos</li>
                        </ol>
                    </div>
                </div>

                <div className="container-fluid">

                    <div className="masonry-item col-md-9">
                        <div className="bgc-white p-20 bd">
                            <CusSearch/>
                            <div className="card ">
                                <div className="card-body">
                                    <div className="card-title">
                                        <h4>Dados complementares </h4>

                                    </div>
                                    <div className="mT-30">
                                        <div className="container" id="needs-validation" novalidate>
                                            <div className="row">
                                                <div className="input-group input-group-rounded col-md-9 mb-3 ">
                                                    <input type="text" placeholder="Modelo" name="Search" className="form-control"/>
                                                    <span className="input-group-btn"><button className="btn btn-primary btn-group-right" type="submit"><i class="ti-search"></i></button></span>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-3 mb-3">

                                                    <label className="fw-500" >Fabricante</label>
                                                    <div className="col-md-9">
                                                        <p className="form-control-static">bmw </p>
                                                    </div>
                                                </div>



                                                <div className="col-md-3 mb-3">

                                                    <label className="fw-500" >Modelo</label>

                                                    <div className="col-md-9">
                                                        <p className="form-control-static">320i Sport </p>
                                                    </div>
                                                </div>
                                                <div className="col-md-3 mb-3">

                                                    <label className="fw-500" >Potência (CV)</label>
                                                    <div className="col-md-9">
                                                        <p className="form-control-static">280 </p>
                                                    </div>
                                                </div>


                                            </div>
                                            <div className="row">
                                                <div className="col-md-3 mb-3">
                                                    <label className="fw-500">Ano de fabricação</label>
                                                    <div className="timepicker-input input-icon form-group">
                                                        <div className="col-md-9">
                                                            <p className="form-control-static"> 2017 </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-3 mb-3">
                                                    <label className="fw-500">Ano do modelo</label>
                                                    <div className="timepicker-input input-icon form-group">
                                                        <div className="col-md-9">
                                                            <p className="form-control-static"> 2017 </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 mb-3">

                                                    <label className="fw-500" >Cilindrada (cm³)</label>
                                                    <div className="col-md-9">
                                                        <p className="form-control-static"> 1997 </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">

                                                <div className="col-md-6 mb-3">
                                                    <div>
                                                        <label className="fw-500 text-center" >Combustível</label>
                                                    </div>

                                                    <div className="col-md-9">
                                                        <p className="form-control-static"> Gasolina </p>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="row">
                                                <div className="col-md-3 mb-3">

                                                    <label className="fw-500" for="validationCustom06">Chassis</label>
                                                    <input type="text" className="form-control" id="validationCustom06"   required/>
                                                </div>
                                                <div className="col-md-3 mb-3">
                                                    <label className="fw-500" for="validationCustom07">Placa</label>

                                                    <input type="text" class="form-control" id="validationCustom08"
                                                       />
                                                </div>
                                                <div className="col-md-3 mb-3">
                                                    <label className="fw-500" for="validationCustom07">Cor</label>

                                                    <input type="text" className="form-control" id="validationCustom07"
                                                        />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-9 mb-3">
                                                    <form method="post">

                                                        <label className="fw-500" for="validationCustom06">Observações</label>
                                                        <textarea className="textarea_editor form-control" rows="15" placeholder="Insira texto ..." />

                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-right col-md-12 mb-3">

                                <Link className="btn cur-p btn-info m-b-10 m-l-5" to={'/vehiModelList'}>Cancelar</Link>



                                <button className="btn cur-p btn-success m-b-10 m-l-5" type="submit">Salvar</button>

                            </div>
                        </div>


                    </div>
                </div>
            </div>
    )
}
}
