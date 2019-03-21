import React, {Component} from "react";
import {Link} from "react-router-dom";
import history from "../../../history";
import CreatableSelect from 'react-select/lib/Creatable';

import CusNVhcCard from "../../../customer/customerData/cusNVhcCard";

import ApiProvider from './../../../../gearUtils/util'
import CusPrev from "../../../customer/list/customerList";

const token = localStorage.getItem('auth-token');
let arr = "";

global.SipID = null;


export default class SipVDForm extends Component {
    state = {
        query: "",
        sip:[],
        SipIss:[],
        SipObs:[],
        SipAcc:[],
        SipDgn:[],

    };

    constructor(props) {
        super(props);

    }
    handleChange = (newValue, actionMeta) => {

        this.setState({SipIss:newValue})


    };
    handleChangeAcc = (newValue, actionMeta) => {

        this.setState({SipAcc:newValue})

    };

    handleChangeObs = (newValue, actionMeta) => {

        this.setState({SipObs:newValue})


    };
    handleChangeDgn = (newValue, actionMeta) => {

        this.setState({SipDgn:newValue})


    };


    send(event) {
        event.preventDefault();

        const requestInfo = {

            method: 'PUT',
            body: JSON.stringify({
                SipAtk: this.SipAtk.value,
                SipAcc: this.state.SipAcc,
                SipObs: this.state.SipObs,
                SipDgn: this.state.SipDgn,
                SipOdm: this.SipOdm.value,
                SipIss: this.state.SipIss,

            }),
            headers: new Headers({
                'content-type': 'application/json',
                'Authorization': token,
            })
        };
        let url =ApiProvider.Add+'/auth/sip/'+ global.SipID;
        fetch(url, requestInfo)
            .then(res => {

                if(res.ok){
                    return res.text();
                }else {
                    throw new Error('Não foi possivel.')
                }
            })
            .then(token =>{

                history.push('/ServInProList')

            })
            .catch(error=>{
                this.setState({msg:error.message})
            })
    };
    componentWillMount() {

        const requestInfoS = {

            method: 'GET',

            headers: new Headers({

                'Authorization': localStorage.getItem('auth-token'),
            })
        };


        fetch(ApiProvider.Add +"/auth/sip/19", requestInfoS)
            .then(res => res.json())
            .then( data => {
                arr = data;
                this.setState({sip:arr})
                global.SipID = this.state.sip._id
            })

    }

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
                        <form  id="needs-validation" onSubmit={this.send.bind(this)} >
                            <div className="mT-30">


                                <CusNVhcCard SipCus={this.state.sip}/>




                                <div className="card ">
                                    <div className="card-body">
                                        <div className="card-title">
                                            <h4>Vistoria </h4>

                                        </div>
                                        <div className="row">

                                            <div className="col-md-3 mb-3">

                                                <label className="fw-500" htmlFor="validationCustom06">Odômetro</label>
                                                <input type="number" className="form-control" id="validationCustom06"ref={input => this.SipOdm = input}/>
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <div>
                                                    <label className="fw-500">Tanque</label>

                                                </div>

                                                <div className="btn-group text-center">
                                                    <div>
                                                        <select id="question_type"
                                                                className="btn  dropdown-toggle" ref={input => this.SipAtk = input}>
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
                                                <CreatableSelect
                                                    isMulti
                                                    onChange={this.handleChangeAcc}
                                                />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-9 mb-3">
                                                <div>
                                                    <label className="fw-500 text-center">Possíveis defeitos</label>
                                                </div>
                                                <CreatableSelect
                                                    isMulti
                                                    onChange={this.handleChange}
                                                />
                                            </div>
                                        </div>

                                    <div className="row">
                                        <div className="col-md-9 mb-3">


                                            <label className="fw-500"
                                                   htmlFor="validationCustom06">Observações</label>
                                            <CreatableSelect
                                                isMulti
                                                onChange={this.handleChangeObs}
                                            />


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

                                            <CreatableSelect
                                                isMulti
                                                onChange={this.handleChangeDgn}
                                            />
                                        </div>






                                    </div>


                                </div>
                            </div>
                            <div className="text-right">
                                <Link className="btn cur-p btn-info m-b-10 m-l-5" to="/cusList"> Cancelar</Link>


                                <button className="btn cur-p btn-success m-b-10 m-l-5" type="submit">Salvar</button>

                            </div>



                    </div>
                </form>
            </div>
    </div>
    </div>
    )
    }
}