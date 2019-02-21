import React from "react";
import {Link} from "react-router-dom";

const ServInProForm = () => (
    <div className="page-wrapper">

        <div className="row page-titles">
            <div className="col-md-5 align-self-center">
                <h3 className="text-primary">Novo serviço</h3></div>
            <div className="col-md-7 align-self-center">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">Home</li>

                    <li className="breadcrumb-item active">Novo serviço</li>
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
                                        <h4>Dados do Cliente </h4>

                                    </div>
                                    <div className="row">
                                        <div className="input-group input-group-rounded col-md-9 mb-3 ">
                                            <input type="text" placeholder="Cliente" name="Search"
                                                   className="form-control"/>
                                            <span className="input-group-btn"><button
                                                className="btn btn-primary btn-group-right" type="submit"><i
                                                className="ti-search"/></button></span>
                                        </div>
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
                                        <div className="input-group input-group-rounded col-md-9 mb-3 ">
                                            <input type="text" placeholder="Veiculo" name="Search"
                                                   className="form-control"/>
                                            <span className="input-group-btn"><button
                                                className="btn btn-primary btn-group-right" type="submit"><i
                                                className="ti-search"/></button></span>
                                        </div>
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


                            <div className="text-right ">

                                <Link className="btn cur-p btn-info m-b-10 m-l-5" to={'/ServInProList'}>Cancelar</Link>


                                <button className="btn cur-p btn-success m-b-10 m-l-5" type="submit">Salvar</button>

                            </div>

                        </form>

                    </div>
                </div>
            </div>
        </div>



    </div>
);

export default ServInProForm;