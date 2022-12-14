import React, {Component} from "react";
import {Link} from "react-router-dom";
import history from "../../../history";
import {fetchApi} from '../../../../gearUtils/fetch/fetch'


export default class PartsForm extends Component {

    constructor(){
        super();
        this.state = {msg:''};

    }

    send(event) {
        event.preventDefault();

        const req= {

            body: {

                PrtDes: this.PrtDes.value,
                PrtPvd: this.PrtPvd.value,
                PrtCon: this.PrtCon.value,
                PrtDer: this.PrtDer.value,
                PrtNum: this.PrtNum.value,
                PrtPrc: this.PrtPrc.value,
                PrtAsg: this.PrtAsg.value,
                PrtMsg: this.PrtMsg.value,


            }
        };


        fetchApi('/auth/part/', "POST", req.body)

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


                <div className="col-md-12">
                    <div className="col-lg-12  ">
                        <div className="card ">
                            <div className="card-body">
                                <form className="container" id="needs-validation" onSubmit={this.send.bind(this)}>

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

                                            <label class="fw-500 " for="validationCustom20">Fornecedor</label>
                                            <input type="text" class="form-control " id="validationCustom20"
                                                   required ref={input => this.PrtPvd = input}/>
                                        </div>

                                    </div>
                                    <div class="row">
                                        <div className="col-md-3 mb-3">

                                            <label className="fw-500"
                                                   htmlFor="validationCustom21">Numeração</label>
                                            <input type="text" className="form-control"
                                                   id="validationCustom21"
                                                   required ref={input => this.PrtNum = input}/>
                                        </div>


                                        <div className="col-md-3 mb-3">

                                            <label className="fw-500" htmlFor="validationCustom06">Preço</label>
                                            <input type="number" className="form-control"
                                                   id="validationCustom06"
                                                   placeholder="" required ref={input => this.PrtPrc = input}/>

                                        </div>
                                        <div class="col-md-3 mb-3">
                                            <div>
                                                <label class="fw-500">Estado</label>
                                            </div>
                                            <div class="btn-group">
                                                <div>
                                                    <select id="question_type1"
                                                            className="btn   dropdown-toggle  " data-toggle="dropdown" aria-expanded="true"
                                                            ref={input => this.PrtCon = input}>
                                                        <option name="fisica"/>
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
                                        <div className="col-md-3 mb-3">
                                            <div>
                                                <label className="fw-500">Derivação</label>
                                            </div>
                                            <div className="btn-group">
                                                <div className="mb-xl-1">
                                                    <select id="question_type1"
                                                            className="btn  dropdown-toggle  " data-toggle="dropdown" aria-expanded="true"
                                                            ref={input => this.PrtDer= input}>
                                                        <option name="fisica"/>
                                                        <option name="fisica">F.E</option>
                                                        <option name="juricida">F.D</option>
                                                        <option name="juricida">T.E</option>
                                                        <option name="juricida">T.D</option>
                                                    </select>
                                                    <script>
                                                        alert($("#question_type option:selected").attr('name'));
                                                    </script>
                                                </div>
                                            </div>

                                        </div>



                                    </div>
                                    <div className="row">
                                        <div class="col-md-3 mb-3">
                                            <label class="fw-500" for="validationCustom07">Estoque minimo</label>

                                            <input type="number" class="form-control" id="validationCustom07"
                                                   placeholder="" ref={input => this.PrtMsg = input}/>
                                            <div class="invalid-feedback"> Please provide last name.</div>
                                        </div>
                                        <div className="col-md-3 mb-3">
                                            <label className="fw-500" htmlFor="validationCustom07">Estoque
                                                atual</label>

                                            <input type="number" className="form-control"
                                                   id="validationCustom07"
                                                   placeholder="" ref={input => this.PrtAsg = input}/>
                                            <div className="invalid-feedback"> Please provide last name.</div>
                                        </div>

                                    </div>
                                </form>

                            </div>
                        </div>

                        <div class="text-right">
                            <Link class="btn cur-p btn-info m-b-10 m-l-5" to={'/partsList'}>Cancelar</Link>


                            <button class="btn cur-p btn-success m-b-10 m-l-5" type="submit">Salvar</button>

                        </div>




                    </div>
                </div>
            </div>


        );
    }
}
