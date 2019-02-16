import React, {Component} from "react";
import {Link} from "react-router-dom";



const ServForm = () => (
    <div className="page-wrapper">

        <div className="row page-titles">
            <div className="col-md-5 align-self-center">
                <h3 className="text-primary">Cadastro de Serviços</h3></div>
            <div className="col-md-7 align-self-center">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="javascript:void(0)">Home</a></li>
                    <li className="breadcrumb-item active">Cadastro de Serviços</li>
                </ol>
            </div>
        </div>

        <div className="container-fluid">


            <div className="masonry-item col-md-10">
                <div className="bgc-white p-20 bd">

                    <div className="mT-30 align-self-center">
                        <form className="container " id="needs-validation" noValidate>
                            <div className="card ">
                                <div className="card-body">

                                    <div className="row">
                                        <div className="col-md-6 mb-3">

                                            <label className="fw-500" htmlFor="validationCustom01">Descrição</label>
                                            <input type="text" className="form-control text-center"
                                                   id="validationCustom01" required/>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-6 mb-3">

                                            <label className="fw-500" htmlFor="validationCustom03">Preço</label>
                                            <input type="number" className="form-control" id="validationCustom03"/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 mb-3">

                                            <label className="fw-500">Observação</label>
                                            <textarea className="textarea_editor form-control" rows="15" />
                                        </div>
                                    </div>


                                </div>
                            </div>


                            <div className="text-right">
                                <Link className="btn cur-p btn-info" to={'/ServInProList'}>Cancelar</Link>
                                <a>     </a>

                                <button className="btn cur-p btn-success" type="submit">Salvar</button>
                            </div>

                        </form>


                    </div>
                </div>
            </div>


        </div>
    </div>
);

export default ServForm;