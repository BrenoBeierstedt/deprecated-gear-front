import React, {Component} from "react";
import {Link} from "react-router-dom";
import history from "../../../history";


import ApiProvider from './../../../../gearUtils/util'

const token = localStorage.getItem('auth-token');




export default class PartsForm extends Component {




    constructor(){
        super();
        this.state = {msg:''};

    }

    send(event) {
        event.preventDefault();

        const requestInfo = {

            method: 'POST',
            body: JSON.stringify({

                PrtDes: this.PrtDes.value,
                PrtPvd: this.PrtPvd.value,
                PrtCon: this.PrtCon.value,
                PrtNum: this.PrtNum.value,
                PrtPrc: this.PrtPrc.value,
                PrtAsg: this.PrtAsg.value,
                PrtMsg: this.PrtMsg.value,



            }),
            headers: new Headers({
                'content-type': 'application/json',
                'Authorization': token,
            })
        };
        fetch(ApiProvider.Add+'/auth/part/', requestInfo)
            .then(res => {

                if(res.ok){
                    return res.text();
                }else {
                    throw new Error('Não foi possivel.')
                }
            })
            .then(token =>{

                history.push('/partsList')

            })
            .catch(error=>{
                this.setState({msg:error.message})
            })
    };


    render() {
        return (


            <div class="page-wrapper">

                <div class="row page-titles">
                    <div class="col-md-5 align-self-center">
                        <h3 class="text-primary">Cadastro de peças</h3></div>
                    <div class="col-md-7 align-self-center">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a>Home</a></li>
                            <li class="breadcrumb-item active">Cadastro de peças</li>
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
                                            <div class="row">
                                                <div class="col-md-6 mb-3">

                                                    <label class="fw-500">Código</label>
                                                    <div class="col-md-9">
                                                        <p class="form-control-static">12331 </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-6 mb-3">

                                                    <label class="fw-500" for="validationCustom02">Descrição</label>
                                                    <input type="text" class="form-control" id="validationCustom02"
                                                           required ref={input => this.PrtDes = input}/>
                                                </div>
                                                <div class="col-md-6 mb-3">

                                                    <label class="fw-500" for="validationCustom20">Fornecedor</label>
                                                    <input type="number" class="form-control" id="validationCustom20"
                                                           required ref={input => this.PrtPvd = input}/>
                                                </div>

                                            </div>
                                            <div class="row">
                                                <div class="col-md-3 mb-3">
                                                    <label class="fw-500">Estado</label>
                                                    <div class="btn-group">
                                                        <div>
                                                            <select id="question_type1"
                                                                    class="btn btn-light dropdown-toggle" ref={input => this.PrtCon = input}>
                                                                <option name="fisica">Novo</option>
                                                                <option name="juricida">Usado</option>
                                                                <option name="juricida">Recondicionado</option>
                                                            </select>
                                                            <script>
                                                                alert($("#question_type option:selected").attr('name'));
                                                            </script>
                                                        </div>
                                                    </div>


                                                </div>
                                                <div class="col-md-3 mb-3">

                                                    <label class="fw-500" for="validationCustom21">Numeração</label>
                                                    <input type="number" class="form-control" id="validationCustom21"
                                                           required ref={input => this.PrtNum = input}/>
                                                </div>


                                                <div class="col-md-3 mb-3">

                                                    <label class="fw-500" for="validationCustom06">Preço</label>
                                                    <input type="number" class="form-control" id="validationCustom06"
                                                           placeholder="" required ref={input => this.PrtPrc = input}/>

                                                </div>

                                                <div class="col-md-3 mb-3">
                                                    <label class="fw-500" for="validationCustom07">Estoque atual</label>

                                                    <input type="number" class="form-control" id="validationCustom07"
                                                           placeholder="" ref={input => this.PrtAsg = input}/>
                                                    <div class="invalid-feedback"> Please provide last name.</div>
                                                </div>
                                                <div className="col-md-3 mb-3">
                                                    <label className="fw-500" htmlFor="validationCustom07">Estoque
                                                        atual</label>

                                                    <input type="number" className="form-control"
                                                           id="validationCustom07"
                                                           placeholder="" ref={input => this.PrtMsg = input}/>
                                                    <div className="invalid-feedback"> Please provide last name.</div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    <div class="text-right">
                                        <Link class="btn cur-p btn-info m-b-10 m-l-5" to={'/partsList'}>Cancelar</Link>


                                        <button class="btn cur-p btn-success m-b-10 m-l-5" type="submit">Salvar</button>

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
