import React, {Component} from "react";
import {Link} from "react-router-dom";
import history from "../../../history";

import ApiProvider from './../../../../gearUtils/util'

const token = localStorage.getItem('auth-token');




export default class SipVDForm extends Component {

    constructor(){
        super();
        this.state = {msg:''};

    }

    send(event) {
        event.preventDefault();

        const requestInfo = {

            method: 'POST',
            body: JSON.stringify({
                CusNam: this.CusNam.value,
                CusSec: this.CusSec.value,
                CusBdy: this.CusBdy.value,
                CusTyp: this.CusTyp.value,
                CusEma: this.CusEma.value,
                TelAco: this.TelAco.value,
                TelNum: this.TelNum.value,
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
        fetch(ApiProvider.Add+'/auth/customer/', requestInfo)
            .then(res => {

                if(res.ok){
                    return res.text();
                }else {
                    throw new Error('Não foi possivel.')
                }
            })
            .then(token =>{

                history.push('/cusList')

            })
            .catch(error=>{
                this.setState({msg:error.message})
            })
    };

    render() {
        return(
            <div className="page-wrapper">

                <div className="row page-titles">
                    <div className="col-md-5 align-self-center">
                        <h3 className="text-primary">Vistoria e diagnóstico</h3>
                    </div>
                    <div className="col-md-7 align-self-center">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="javascript:void(0)">Home</a></li>
                            <li className="breadcrumb-item active">Vistoria e diagnóstico</li>
                        </ol>
                    </div>
                </div>
                <div className="masonry-item col-md-10">
                    <div className="bgc-white p-20 bd">

                        <div className="mT-30">
                            <div className="col-md-13">
                                <div className="card p-30">
                                    <div className="media">

                                        <div className="media-left meida media-middle">
                                            <span><i className="fa fa-usd f-s-40 color-primary"></i></span>
                                        </div>
                                        <div className="media-body media-text-right">
                                            <h2>568120</h2>
                                            <p className="m-b-0">CARD PARA RELATÓRIO MANUSCRITO</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <form  id="needs-validation" onSubmit={this.send.bind(this)} >

                                <div className="card ">
                                    <div className="card-body">
                                        <div className="card-title">
                                            <h4>Vistoria </h4>

                                        </div>
                                        <div className="row">

                                            <div className="col-md-3 mb-3">

                                                <label className="fw-500" htmlFor="validationCustom06">Odômetro</label>
                                                <input type="number" className="form-control" id="validationCustom06"/>
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <div>
                                                    <label className="fw-500">Tanque</label>

                                                </div>

                                                <div className="btn-group text-center">
                                                    <div>
                                                        <select id="question_type"
                                                                className="btn  dropdown-toggle">
                                                            <option name="zero">0</option>
                                                            <option name="q">1/4</option>
                                                            <option name="h">1/2</option>
                                                            <option name="tq">3/4</option>
                                                            <option name="full">1</option>
                                                        </select>
                                                        <script>
                                                            alert($("#question_type option:selected").attr('name'));
                                                        </script>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="row">
                                            <div className="col-md-9 mb-3">
                                                <div>
                                                    <label className="fw-500 text-center">Acessórios</label>
                                                </div>
                                                <div className="tags-input fw-500" data-name="tags-input">
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-9 mb-3">
                                                <div>
                                                    <label className="fw-500 text-center">Possíveis defeitos</label>
                                                </div>
                                                <div className="tags-input fw-500" data-name="tags-input">
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-9 mb-3">
                                                <form method="post">

                                                    <label className="fw-500"
                                                           htmlFor="validationCustom06">Observações</label>
                                                    <textarea className="textarea_editor form-control" rows="15"
                                                              placeholder="Insira texto ..."
                                                    />

                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card ">
                                    <div className="card-body">
                                        <div className="card-title">
                                            <h4>Diagnóstico </h4>

                                        </div>

                                        <div className="row">

                                            <div className="col-md-9 mb-3">
                                                <div>
                                                    <label className="fw-500 text-center">Possíveis defeitos</label>
                                                </div>
                                                <div className="tags-input fw-500" data-name="tags-input">
                                                </div>
                                            </div>






                                        </div>


                                    </div>
                                </div>
                                <div className="text-right">
                                    <Link className="btn cur-p btn-info m-b-10 m-l-5" to="/cusList"> Cancelar</Link>


                                    <button className="btn cur-p btn-success m-b-10 m-l-5" type="submit">Salvar</button>

                                </div>
                            </form>


                        </div>
                    </div>
                </div>
            </div>
        )
    }
}