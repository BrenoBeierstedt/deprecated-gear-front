// Importando o React
import React ,{Component} from "react";
import Timeline from 'react-time-line'
import ApiProvider from './../../../../gearUtils/util'

import CusNVhcCard from "../../../customer/customerData/cusNVhcCard";

import {Link} from "react-router-dom";


const token = localStorage.getItem('auth-token');
let arr = "";

global.SipID = null;
const requestInfo = {

    method: 'GET',

    headers: new Headers({

        'Authorization': token,
    })
};

const events = [
    {ts: "2017-09-17T12:22:46.587Z", text: 'Logged in'},
    {ts: "2017-09-17T12:21:46.587Z", text: 'Clicked Home Page'},
    {ts: "2017-09-17T12:20:46.587Z", text: 'Edited Profile'},
    {ts: "2017-09-16T12:22:46.587Z", text: 'Registred'},
    {ts: "2017-09-16T12:21:46.587Z", text: 'Clicked Cart'},
    {ts: "2017-09-16T12:20:46.587Z", text: 'Clicked Checkout'},
    {ts: "2017-09-16T12:20:46.587Z", text: 'Clicked Checkout'},
    {ts: "2017-09-16T12:20:46.587Z", text: 'Clicked Checkout'},
    {ts: "2017-09-16T12:20:46.587Z", text: 'Clicked Checkout'},
    {ts: "2017-09-16T12:20:46.587Z", text: 'Clicked Checkout'},
    {ts: "2017-09-16T12:20:46.587Z", text: 'Clicked Checkout'},
];






export default class TimeLine extends Component {

    constructor(){
        super();
        this.state = {
            data:[],
        sip:[]};
    };

    componentWillMount() {

        const requestInfoS = {

            method: 'GET',

            headers: new Headers({

                'Authorization': localStorage.getItem('auth-token'),
            })
        };


        fetch(ApiProvider.Add +"/auth/sip/25", requestInfoS)
            .then(res => res.json())
            .then( data => {
                arr = data;
                this.setState({sip:arr})
                global.SipID = this.state.sip._id
            })

    }


    render() {
        return (

            <div className="page-wrapper">

                <div className="row page-titles">
                    <div className="col-md-5 align-self-center">
                        <h3 className="text-primary">Serviços em andamento</h3></div>
                    <div className="col-md-7 align-self-center">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="javascript:void(0)">Home</a></li>
                            <li className="breadcrumb-item active">Serviços em andamento</li>
                        </ol>
                    </div>
                </div>
                <div className="mT-30">
                    <div className="container-fluid">
                        <div className="col-md-12">
                            <CusNVhcCard SipCus={this.state.sip}/>

                        </div>
                        <div className="row">


                            <div className="col-md-6">

                                <div className="bgc-white bd bdrs-3 p-20 mB-20">
                                    <div className="card ">
                                        <div className="card-title">
                                            <h4>Timeline de serviços </h4>

                                        </div>
                                        <div className="card-body">


                                            <div className="row">
                                                <div className="col-md-12 mb-3">
                                                    <Timeline items={events} />

                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="bgc-white bd bdrs-3 p-20 mB-20">
                                    <div className="card ">
                                        <div className="card-title">
                                            <h4>Checklist de serviços </h4>

                                        </div>
                                        <div className="card-body">


                                            <div className="row">
                                                <div className="col-md-12 mb-3">
                                                    <div className="checkbox" >
                                                        <label>
                                                            <input type="checkbox"/> serviço
                                                        </label>

                                                    </div>
                                                    <div className="checkbox">
                                                        <label>
                                                            <input type="checkbox"/> Remember me
                                                        </label>

                                                    </div>
                                                    <div className="checkbox">
                                                        <label>
                                                            <input type="checkbox"/> Remember me
                                                        </label>

                                                    </div>
                                                    <div className="checkbox">
                                                        <label>
                                                            <input type="checkbox"/> Remember me
                                                        </label>

                                                    </div>
                                                    <div className="checkbox">
                                                        <label>
                                                            <input type="checkbox"/> Remember me
                                                        </label>

                                                    </div>

                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">

                                <div className="bgc-white bd bdrs-3 p-20 mB-20">
                                    <div className="card ">
                                        <div className="card-title">
                                            <h4>Peças </h4>

                                        </div>
                                        <div className="card-body">


                                            <div className="row">
                                                <div className="col-md-12 mb-3">
                                                    <Timeline items={events} />

                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="bgc-white bd bdrs-3 p-20 mB-20">
                                    <div className="card ">
                                        <div className="card-title">
                                            <h4>Produtos </h4>

                                        </div>
                                        <div className="card-body">


                                            <div className="row ">
                                                <div className="col-md-12 mb-3">
                                                    <div className="checkbox col-lg " >
                                                        <label>
                                                            <input type="checkbox"/> serviço
                                                        </label>

                                                    </div>
                                                    <div className="checkbox mb-3">
                                                        <label>
                                                            <input type="checkbox"/> Remember me
                                                        </label>

                                                    </div>
                                                    <div className="checkbox">
                                                        <label>
                                                            <input type="checkbox"/> Remember me
                                                        </label>

                                                    </div>
                                                    <div className="checkbox col-md-6 mb-3">
                                                        <label>
                                                            <input type="checkbox"/> Remember me
                                                        </label>

                                                    </div>
                                                    <div className="checkbox">
                                                        <label>
                                                            <input type="checkbox"/> Remember me
                                                        </label>

                                                    </div>

                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-12">
                                <div className="bgc-white bd bdrs-3 p-20 mB-20">
                                    <div className="card ">

                                        <button type="button" className="btn btn-danger btn-block m-b-10">Editar orçamento
                                        </button>
                                    </div>
                                </div>

                                </div>

                            </div>
                        <div className="col-md-12">
                        <div className="text-right">
                            <Link className="btn cur-p btn-info m-b-10 m-l-5" to="/cusList"> Cancelar</Link>


                            <button className="btn cur-p btn-success m-b-10 m-l-5" type="submit">Salvar</button>
                        </div>
                        </div>


                        </div>
                    </div>
                </div>


        )
    }
}



