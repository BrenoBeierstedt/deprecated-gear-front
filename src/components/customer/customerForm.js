// Importando o React
import React, {Component} from "react";
import {Link} from "react-router-dom";
import history from "../history";


const token = localStorage.getItem('auth-token');




export default class CusForm extends Component {




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
        fetch('http://187.87.109.66:3005/auth/customer/', requestInfo)
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
                        <h3 className="text-primary">Cadastro CLiente</h3>
                    </div>
                    <div className="col-md-7 align-self-center">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="javascript:void(0)">Home</a></li>
                            <li className="breadcrumb-item active">Cadastro cliente</li>
                        </ol>
                    </div>
                </div>
                <div className="masonry-item col-md-10">
                    <div className="bgc-white p-20 bd">

                        <div className="mT-30">
                            <form  id="needs-validation" onSubmit={this.send.bind(this)} >
                                <div className="card ">
                                    <div className="card-body">
                                        <div className="card-title">
                                            <h4>Dados complementares </h4>

                                        </div>
                                        <div className="row">
                                            <div className="col-md-6 mb-3">

                                                <label className="fw-500" htmlFor="CusNam">Nome / Razão social</label>
                                                <input type="text" className="form-control" id="CusNam" placeholder="Nome ou Razão social" ref={input => this.CusNam = input} required/>
                                            </div>


                                            <div className="col-md-6 mb-3">

                                                <label className="fw-500" htmlFor="CusSec">CPF/CNPJ</label>
                                                <input type="number" className="form-control"  placeholder="CPF ou CNPJ"  ref={input => this.CusSec = input} required/>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-2 mb-3">
                                                <label className="fw-500" htmlFor="validationCustom01">Tipo pessoa</label>
                                                <div className="btn-group">
                                                    <div>
                                                        <select id="question_type" className="btn btn-light dropdown-toggle" ref={input => this.CusTyp = input}>
                                                            <option name="fisica">Física</option>
                                                            <option name="juricida">Juridica</option>
                                                        </select>
                                                        <script>
                                                            alert($("#question_type option:selected").attr('name'));
                                                        </script>
                                                    </div>
                                                </div>


                                            </div>
                                            <div className="col-md-2 mb-3">
                                                <label className="fw-500">Data de nasc.</label>
                                                <div className="timepicker-input input-icon form-group">
                                                    <div className="input-group">

                                                        <input type="date" className="form-control bdc-grey-200 start-date"
                                                               placeholder="Escolha data" ref={input => this.CusBdy = input} data-provide="datepicker"/>
                                                    </div>
                                                </div>
                                            </div>


                                            <div className="col-md-6 mb-3">

                                                <label className="fw-500" htmlFor="validationCustom02">E-mail</label>
                                                <input type="text" className="form-control" id="validationCustom09"
                                                       placeholder="exemplo@endereço.com.br" ref={input => this.CusEma = input} required/>
                                            </div>


                                        </div>
                                        <div className="row">
                                            <div className="col-sm-2 mb-3">

                                                <label className="fw-500" htmlFor="validationCustom01">DDD</label>
                                                <input type="number" className="form-control" id="validationCustom17"
                                                       placeholder="DDD" ref={input => this.TelAco = input} required/>
                                            </div>
                                            <div className="col-md-4 mb-3">

                                                <label className="fw-500" htmlFor="validationCustom01">Telefone</label>
                                                <input type="number" className="form-control" id="validationCustom18"
                                                       placeholder="Telefone" ref={input => this.TelNum = input} required/>
                                            </div>
                                            <div className="col-sm-2 mb-3">

                                                <label className="fw-500" htmlFor="validationCustom01">DDD</label>
                                                <input type="number" className="form-control" id="validationCustom10"
                                                       placeholder="DDD" ref={input => this.Cf1Aco = input} required/>
                                            </div>
                                            <div className="col-md-4 mb-3">

                                                <label className="fw-500" htmlFor="validationCustom01">Celular</label>
                                                <input type="number" className="form-control" id="validationCustom11"
                                                       placeholder="Celular" ref={input => this.Cf1Num = input} required/>
                                            </div>

                                        </div>

                                        <div className="row">
                                            <div className="col-md-6 mb-3">

                                                <label className="fw-500" htmlFor="validationCustom06">Endereço</label>
                                                <input type="text" className="form-control" id="validationCustom06"
                                                       placeholder="Endereço" ref={input => this.AddStr = input} required/>

                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <label className="fw-500" htmlFor="validationCustom07">Complemento</label>

                                                <input type="text" className="form-control" id="validationCustom07"
                                                       placeholder="Complemento" ref={input => this.AddCom = input}/>
                                                <div className="invalid-feedback"> Please provide last name.</div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6 mb-3">
                                                <label className="fw-500" htmlFor="validationCustom03">Cidade</label>

                                                <input type="text" className="form-control" id="validationCustom03"
                                                       placeholder="Cidade" ref={input => this.AddCit = input} required/>

                                            </div>
                                            <div className="col-md-3 mb-3">
                                                <label className="fw-500" htmlFor="validationCustom04">Estado</label>

                                                <input type="text" className="form-control" id="validationCustom04"
                                                       placeholder="Estado" ref={input => this.AddSta = input} required/>
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





