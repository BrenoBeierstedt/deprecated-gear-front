import React, {Component} from "react";
import {Link} from "react-router-dom";
import history from "../../../history";

import {fetchApi} from './../../../../gearUtils/fetch/fetch'
import ApiProvider from '../../../../gearUtils/apiMsc'

const token = localStorage.getItem('auth-token');




export default class ProductForm extends Component {



    constructor(){
        super();
        this.state = {msg:''};

    }

    send(event) {
        event.preventDefault();

        const req = {


            body: {

                ProDes: this.ProDes.value,
                ProPvd: this.ProPvd.value,
                ProDer: this.ProDer.value,
                ProPrc: this.ProPrc.value,
                ProAsg: this.ProAsg.value,
                ProMsg: this.ProMsg.value,

            },

        };

        fetchApi('/auth/product/', "POST", req.body)

            .then(token =>{

                history.push('/proList')

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
                        <h3 className="text-primary">Cadastro de produtos</h3></div>
                    <div className="col-md-7 align-self-center">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="javascript:void(0)">Home</a></li>
                            <li className="breadcrumb-item active">Cadastro de produtos</li>
                        </ol>
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="col-lg-12  ">
                        <div className="card ">
                            <div className="card-body">
                                <form className="container" id="needs-validation" onSubmit={this.send.bind(this)}>

                                    <div className="row">
                                        <div className="col-md-6 mb-3">

                                            <label className="fw-500"
                                                   htmlFor="validationCustom02">Descrição</label>
                                            <input type="text" className="form-control"
                                                   id="validationCustom02"
                                                   required ref={input => this.ProDes = input}/>
                                        </div>
                                        <div className="col-md-6 mb-3">

                                            <label className="fw-500"
                                                   htmlFor="validationCustom20">Fornecedor</label>
                                            <input type="text" className="form-control"
                                                   id="validationCustom20"
                                                   required ref={input => this.ProPvd = input}/>
                                        </div>

                                    </div>
                                    <div className="row">





                                        <div className="col-md-3 mb-3">
                                            <div>
                                                <label className="fw-500" htmlFor="validationCustom07">Estoque
                                                    min.</label>
                                            </div>
                                            <input type="number" className="form-control"
                                                   id="validationCustom07"
                                                   placeholder="" ref={input => this.ProMsg = input}/>
                                            <div className="invalid-feedback"> Please provide last name.</div>
                                        </div>
                                        <div className="col-md-3 mb-3">
                                            <div>
                                                <label className="fw-500" htmlFor="validationCustom21">Estoque
                                                    atual</label>
                                            </div>
                                            <input type="number" className="form-control "
                                                   id="validationCustom21"
                                                   placeholder="" ref={input => this.ProAsg = input}/>
                                            <div className="invalid-feedback"> Please provide last name.</div>
                                        </div>
                                        <div className="col-md-3 mb-3">
                                            <div>
                                                <label className="fw-500"
                                                       htmlFor="validationCustom06">Preço</label>
                                            </div>

                                            <input type="number" className="form-control"
                                                   id="validationCustom06"
                                                   placeholder="" required ref={input => this.ProPrc = input}/>

                                        </div>
                                        <div className="col-md-3 mb-3">
                                            <div>
                                                <label className="fw-500">Derivação</label>
                                            </div>
                                            <div className="btn-group">
                                                <div>
                                                    <select id="question_type1"
                                                            className="btn  dropdown-toggle" ref={input => this.ProDer = input}>
                                                        <option name="fisica"></option>
                                                        <option >Grande</option>
                                                        <option >Médio</option>
                                                        <option >Pequeno</option>
                                                        <option >unidade</option>
                                                        <option >par</option>
                                                        <option >litro</option>
                                                        <option >Kg</option>
                                                        <option >mm</option>
                                                        <option >cm</option>
                                                        <option >mt</option>
                                                        <option >pol</option>

                                                    </select>
                                                    <script>
                                                        alert($("#question_type option:selected").attr('name'));
                                                    </script>
                                                </div>
                                            </div>


                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className="text-right">
                            <Link className="btn cur-p btn-info m-b-10 m-l-5"
                                  to={"/proList"}>Cancelar</Link>


                            <button className="btn cur-p btn-success m-b-10 m-l-5" type="submit">Salvar
                            </button>

                        </div>
                    </div>
                </div>
            </div>




        );
    }}
