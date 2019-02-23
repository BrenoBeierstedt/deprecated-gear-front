import React, {Component} from "react";

export default class CusSearch extends Component {



render(){
    return(

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

)}}