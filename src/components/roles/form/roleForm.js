// Importando o React
import React, {Component} from "react";
import {Link} from "react-router-dom";
import history from "../../history";

import {fetchApi} from '../../../gearUtils/fetch/fetch'





export default class CusForm extends Component {




    constructor(){
        super();
        this.state = {msg:''};

    }

    send(event) {
        event.preventDefault();
        const req= { body: {

                SceNam: this.SceNam.value,
                SceDes: this.SceDes.value,

            }

        };

        fetchApi('/auth/security/roles', "POST",req.body )

            .then(token =>{

                history.push('/rolelist')

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
                        <h3 className="text-primary">Cadastro Papel</h3>
                    </div>
                    <div className="col-md-7 align-self-center">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="javascript:void(0)">Home</a></li>
                            <li className="breadcrumb-item active">Cadastro Papel</li>
                        </ol>
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="col-lg-12  ">

                        <form  id="needs-validation" onSubmit={this.send.bind(this)} >




                            <div className="card ">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-6 mb-3">

                                            <label className="fw-500" htmlFor="validationCustom06">Nome</label>
                                            <input type="text" className="form-control" id="validationCustom06"
                                                   placeholder="Nome" ref={input => this.SceNam = input} required/>

                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label className="fw-500" htmlFor="validationCustom07">Descrição</label>

                                            <input type="text" className="form-control" id="validationCustom07"
                                                   placeholder="Descrição" ref={input => this.SceDes = input}/>
                                            <div className="invalid-feedback"> Please provide last name.</div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="text-right col-md-12 mb-lg-5">
                                <Link className="btn cur-p btn-info m-b-1 m-lg-2" to="/rolelist"> Cancelar</Link>


                                <button className="btn cur-p btn-success m-b-1 m-lg-2" type="submit">Salvar</button>

                            </div>
                        </form>
                    </div>
                </div>
            </div>

        )
    }
}





