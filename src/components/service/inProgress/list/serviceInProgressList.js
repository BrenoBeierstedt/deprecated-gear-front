// Importando o React
import React ,{Component} from "react";

import ApiProvider from './../../../../gearUtils/util'

import  SipPrev from "./sipPrev";
import {Link} from "react-router-dom";


const token = localStorage.getItem('auth-token');

const requestInfo = {

    method: 'GET',

    headers: new Headers({

        'Authorization': token,
    })
};

export default class ServInProList extends Component {

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
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="bgc-white bd bdrs-3 p-20 mB-20">
                                <div className="card ">
                                    <div className="card-body">


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
                                                        Veiculo</th>
                                                    <th scope="col">
                                                        Placa</th>
                                                    <th scope="col">
                                                        Status</th>
                                                    <th scope="col">
                                                        Editar</th>
                                                </tr>
                                                </thead>
                                                {this.state.sip.map(sip => (
                                                    <SipPrev key={sip._id}{...sip}/>
                                                ))}
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}



