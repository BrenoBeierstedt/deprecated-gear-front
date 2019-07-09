// Importando o React
import React ,{Component} from "react";

import ApiProvider from '../../gearUtils/apiMsc'

import  CusPrev from "./cusPrev";
import {Link} from "react-router-dom";




const requestInfo = {

    method: 'GET',

    headers: new Headers({

        'Authorization': localStorage.getItem('auth-token'),
    })
};

export default class CusList extends Component {

    token = null;
    state = {
        query: "",
        customer: []
    };

    onChange = e => {
        const { value } = e.target;
        this.setState({
            query: value
        });

        this.search(value);
    };


    search = query => {
        const url = ApiProvider.Add +`/auth/customer/search?q=${query}`;
        const token = {};
        this.token = token;

        fetch(url, requestInfo)
            .then(results => results.json())
            .then(data => {
                if (this.token === token) {
                    this.setState({ customer: data });
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
                        <h3 className="text-primary">Clientes</h3></div>
                    <div className="col-md-7 align-self-center">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="javascript:void(0)">Home</a></li>
                            <li className="breadcrumb-item active">Clientes</li>
                        </ol>
                    </div>
                </div>
                <form className="col-md-12 mb-6 "  >
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="bgc-white bd bdrs-3 p-20 mB-20">
                                    <div className="card ">
                                        <div className="card-body">


                                            <div className="row">

                                                <div className="input-group input-group-rounded col-md-6 mb-3 ">

                                                    <input type="text" placeholder="Pesquisar Cliente" name="search"
                                                           className="form-control" onChange={this.onChange}/>



                                                </div>


                                                <div className="col-md-5 mb-6 ">
                                                    <Link className="btn cur-p btn-outline-success" to="/cusForm">
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
                                                            Nome
                                                        </th>
                                                        <th scope="col">
                                                            Telefone
                                                        </th>
                                                        <th scope="col">
                                                            E-mail
                                                        </th>
                                                        <th scope="col">
                                                            Editar/Veiculos
                                                        </th>
                                                    </tr>
                                                    </thead>
                                                    {this.state.customer.map(cus => (
                                                        <CusPrev key={cus._id}{...cus}/>
                                                    ))}
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </form>

            </div>


        )
    }
}



