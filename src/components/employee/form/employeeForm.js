import React, {Component} from "react";
import {Link} from "react-router-dom";
import history from "../../history";

import ApiProvider from './../../../gearUtils/util'


const token = localStorage.getItem('auth-token');


export default class EmpForm extends Component {


    constructor(){
        super();
        this.state = {msg:''};

    }

    send(event) {
        event.preventDefault();

        const requestInfo = {

            method: 'POST',
            body: JSON.stringify({
                EmpNam: this.EmpNam.value,
                EmpSec: this.EmpSec.value,
                EmpBdy: this.EmpBdy.value,
                EmpPos: this.EmpPos.value,
                EmpEma: this.EmpEma.value,

                Cf1Aco: this.Cf1Aco.value,
                Cf1Num: this.Cf1Num.value,
                CusAdd:[{
                    AddStr: this.AddStr.value,
                    AddZip: this.AddZip.value,
                    AddCit: this.AddCit.value,
                    AddSta: this.AddSta.value,
                    AddCom: this.AddCom.value,
                } ]

            }),
            headers: new Headers({
                'content-type': 'application/json',
                'Authorization': token,
            })
        };
        fetch(ApiProvider.Add+'/auth/employee/', requestInfo)
            .then(res => {

                if(res.ok){
                    return res.text();
                }else {
                    throw new Error('Não foi possivel.')
                }
            })
            .then(token =>{

                history.push('/empList')

            })
            .catch(error=>{
                this.setState({msg:error.message})
            })
    };


    render() {
        return (


            <div className="page-wrapper">

                <div className="row page-titles">
                    <div className="col-md-5 align-self-center">
                        <h3 className="text-primary">Cadastro de Funcionário</h3></div>
                    <div className="col-md-7 align-self-center">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="javascript:void(0)">Home</a></li>
                            <li className="breadcrumb-item active">Cadastro de Funcionário</li>
                        </ol>
                    </div>
                </div>

                <div className="container-fluid">


                    <div className="masonry-item col-md-10">
                        <div className="bgc-white p-20 bd">

                            <div className="mT-30">
                                <form className="container" id="needs-validation" onSubmit={this.send.bind(this)}>
                                    <div className="card ">
                                        <div className="card-body">

                                            <div className="row">
                                                <div className="col-md-6 mb-3">

                                                    <label className="fw-500" htmlFor="validationCustom01">Nome
                                                        completo</label>
                                                    <input type="text" className="form-control" id="validationCustom01"
                                                           placeholder="Nome completo" ref={input => this.EmpNam = input} required/>
                                                </div>


                                                <div className="col-md-6 mb-3">

                                                    <label className="fw-500"
                                                           htmlFor="validationCustom02">CPF/CNPJ</label>
                                                    <input type="number" className="form-control"
                                                           id="validationCustom02"
                                                           placeholder="CPF ou CNPJ" ref={input => this.EmpSec = input} required/>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-3 mb-3">
                                                    <label className="fw-500">Data de nascimento</label>
                                                    <div className="timepicker-input input-icon form-group">
                                                        <div className="input-group">

                                                            <input type="date"
                                                                   className="form-control bdc-grey-200 start-date"
                                                                   placeholder="Escolha data"
                                                                   data-provide="datepicker" ref={input => this.EmpBdy = input}/>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-md-6 mb-3">

                                                    <label className="fw-500" htmlFor="validationCustom02">Cargo</label>
                                                    <input type="text" className="form-control" id="validationCustom14"
                                                           placeholder="Cargo" required ref={input => this.EmpPos = input}/>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-1 mb-3">

                                                    <label className="fw-500" htmlFor="validationCustom01">DDD</label>
                                                    <input type="number" className="form-control"
                                                           id="validationCustom10"
                                                           placeholder="DDD" required ref={input => this.Cf1Aco = input}/>
                                                </div>
                                                <div className="col-md-5 mb-3">

                                                    <label className="fw-500"
                                                           htmlFor="validationCustom01">Telefone</label>
                                                    <input type="number" className="form-control"
                                                           id="validationCustom11"
                                                           placeholder="Telefone" ref={input => this.Cf1Num = input} required/>
                                                </div>
                                                <div className="col-md-6 mb-3">

                                                    <label className="fw-500"
                                                           htmlFor="validationCustom02">E-mail</label>
                                                    <input type="email" className="form-control" id="validationCustom09"
                                                           placeholder="exemplo@endereço.com.br" ref={input => this.EmpEma = input} required/>
                                                </div>
                                            </div>


                                            <div className="row">
                                                <div className="col-md-6 mb-3">

                                                    <label className="fw-500"
                                                           htmlFor="validationCustom06">Endereço</label>
                                                    <input type="text" className="form-control" id="validationCustom06"
                                                           placeholder="Endereço" ref={input => this.AddStr = input} required/>
                                                </div>
                                                <div className="col-md-6 mb-3">
                                                    <label className="fw-500"
                                                           htmlFor="validationCustom07">Complemento</label>

                                                    <input type="text" className="form-control" id="validationCustom07"
                                                           placeholder="Complemento" ref={input => this.AddCom = input}/>
                                                    <div className="invalid-feedback"> Please provide last name.</div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6 mb-3">
                                                    <label className="fw-500"
                                                           htmlFor="validationCustom03">Cidade</label>

                                                    <input type="text" className="form-control" id="validationCustom03"
                                                           placeholder="Cidade" ref={input => this.AddCit = input} required/>

                                                </div>
                                                <div className="col-md-3 mb-3">
                                                    <label className="fw-500"
                                                           htmlFor="validationCustom04">Estado</label>

                                                    <input type="text" className="form-control" id="validationCustom04"
                                                           placeholder="Estado"  ref={input => this.AddSta = input} required/>
                                                    <div className="invalid-feedback">Insira estado válido.</div>
                                                </div>
                                                <div className="col-md-3 mb-3">
                                                    <label htmlFor="validationCustom05">CEP</label>

                                                    <input type="text" className="form-control" id="validationCustom05"
                                                           placeholder="CEP" ref={input => this.AddZip = input} required/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <Link to="/empList" className="btn cur-p btn-info m-b-10 m-l-5">Cancelar</Link>


                                        <button className="btn cur-p btn-success m-b-10 m-l-5" type="submit">Salvar
                                        </button>

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

