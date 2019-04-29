import React, {Component} from "react";
import {Link} from "react-router-dom";
import history from "../../../history";

import ApiProvider from './../../../../gearUtils/util'

const token = localStorage.getItem('auth-token');





export default class ServForm extends Component {


    constructor() {
        super();
        this.state = {msg: ''};

    }

    send(event) {
        event.preventDefault();

        const requestInfo = {

            method: 'POST',
            body: JSON.stringify({
                CsvDes: this.CsvDes.value,
                CsvPrc: this.CsvPrc.value,
                CsvObs: this.CsvObs.value,


            }),
            headers: new Headers({
                'content-type': 'application/json',
                'Authorization': token,
            })
        };
        fetch(ApiProvider.Add + '/auth/csv/', requestInfo)
            .then(res => {

                if (res.ok) {
                    return res.text();
                } else {
                    throw new Error('Não foi possivel.')
                }
            })
            .then(token => {

                history.push('/ServList')

            })
            .catch(error => {
                this.setState({msg: error.message})
            })
    };


    render() {
        return (
            <div className="page-wrapper">

                <div className="row page-titles">
                    <div className="col-md-5 align-self-center">
                        <h3 className="text-primary">Cadastro de Serviços</h3></div>
                    <div className="col-md-7 align-self-center">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">Home</li>
                            <li className="breadcrumb-item active">Cadastro de Serviços</li>
                        </ol>
                    </div>
                </div>

                <div className="container-fluid">


                    <div className="masonry-item col-md-10">
                        <div className="bgc-white p-20 bd">

                            <div className="mT-30 align-self-center">
                                <form  id="needs-validation" onSubmit={this.send.bind(this)} >
                                    <div className="card ">
                                        <div className="card-body">

                                            <div className="row">
                                                <div className="col-md-6 mb-3">

                                                    <label className="fw-500"
                                                           htmlFor="validationCustom01">Descrição</label>
                                                    <input type="text" className="form-control "
                                                           id="validationCustom01" ref={input => this.CsvDes = input} required/>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-md-6 mb-3">

                                                    <label className="fw-500" htmlFor="validationCustom03">Preço</label>
                                                    <input type="number" className="form-control"
                                                           ref={input => this.CsvPrc = input}  id="validationCustom03"/>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6 mb-3">

                                                    <label className="fw-500">Observação</label>
                                                    <textarea className="textarea_editor form-control" ref={input => this.CsvObs = input} rows="15"/>
                                                </div>
                                            </div>


                                        </div>
                                    </div>


                                    <div className="text-right">
                                        <Link className="btn cur-p btn-info" to={'/ServList'}>Cancelar</Link>
                                        <a> </a>

                                        <button className="btn cur-p btn-success" type="submit">Salvar</button>
                                    </div>

                                </form>


                            </div>
                        </div>
                    </div>


                </div>
            </div>
        );
    }
}

