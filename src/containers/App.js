import React, { Component } from 'react';
import ApiProvider from './../gearUtils/util'

import SipPrev from './../components/service/inProgress/list/sipPrev'

import {Link} from "react-router-dom";




const token = localStorage.getItem('auth-token');

const requestInfo = {

    method: 'GET',

    headers: new Headers({

        'Authorization': token,
    })
};

export default class App extends Component {

    token = null;
    state = {
        query: "",
        sip: []
    };

    onChange = e => {
        const { value } = e.target;
        this.setState({
            query: value
        });

        this.search(value);
    };


    search = query => {
        const url = ApiProvider.Add +`/auth/l/sip/search?q=${query}`;
        const token = {};
        this.token = token;

        fetch(url, requestInfo)
            .then(results => results.json())
            .then(data => {
                if (this.token === token) {
                    this.setState({ sip: data });
                }
            });
    };

    componentDidMount() {
        this.search("");
        if(!localStorage.getItem("Refresh")){
            localStorage.setItem("Refresh","ok");
            window.location.reload();
        }
    }
    render() {

        return (

            <div className="page-wrapper">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="card p-30">
                                        <div className="media">
                                            <div className="media-left meida media-middle">
                                                <span><i className="fa fa-usd f-s-40 color-primary"/></span>
                                            </div>
                                            <div className="media-body media-text-right">
                                                <h2>568120</h2>
                                                <p className="m-b-0">Agendados</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card p-30">
                                        <div className="media">
                                            <div className="media-left meida media-middle">
                                                <span><i
                                                    className="fa fa-shopping-cart f-s-40 color-success"/></span>
                                            </div>
                                            <div className="media-body media-text-right">
                                                <h2>1178</h2>
                                                <p className="m-b-0">Serviços</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card p-30">
                                        <div className="media">
                                            <div className="media-left meida media-middle">
                                                <span><i className="fa fa-archive f-s-40 color-warning"/></span>
                                            </div>
                                            <div className="media-body media-text-right">
                                                <h2>25</h2>
                                                <p className="m-b-0">Veiculos</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="row bg-white m-l-0 m-r-0 box-shadow ">
                                <div className="col-lg-12  ">
                                    <div className="card ">
                                        <div className="card-body">

                                            <div className="card-title">
                                                <h4>Serviços em andamento </h4>
                                            </div>
                                            <div className="row">

                                                <form className="col-md-4 mb-6 "  >
                                                    <div className="input-group input-group-rounded col-md-16 mb-3 ">

                                                        <input type="text" placeholder="Pesquisar Cliente" name="search"
                                                               className="form-control" onChange={this.onChange}/>


                                                    </div>
                                                </form>

                                                <div className="col-md-5 mb-6 ">
                                                    <Link className="btn cur-p btn-outline-success" to="/ServInProForm">
                                                        Cadastrar</Link>

                                                </div>
                                            </div>
                                            <div className="table-responsive m-t-40">
                                                <table id="example23"
                                                       className="display nowrap table table-hover table-striped "
                                                       cellSpacing="0" width="100%">
                                                    <thead>
                                                    <tr>
                                                        <th scope="col">
                                                            Cód. Serviço</th>
                                                        <th scope="col">
                                                            Cliente</th>
                                                        <th scope="col">
                                                            Telefone</th>
                                                        <th scope="col">
                                                            Veiculo</th>
                                                        <th scope="col">
                                                            Placa</th>
                                                        <th scope="col">
                                                            Editar</th>
                                                    </tr>
                                                    </thead>
                                                    { this.state.sip.map(sip =>
                                                        <SipPrev key={sip._id}{...sip}/>
                                                    )}
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}



