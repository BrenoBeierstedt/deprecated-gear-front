import React, {Component} from "react";
import {Link} from "react-router-dom";
import ApiProvider from "../../../../gearUtils/util";

import  CsvPrev from "./CsvPrev";





const requestInfo = {

    method: 'GET',

    headers: new Headers({

        'Authorization': localStorage.getItem('auth-token'),
    })
};

export default class ServList extends Component {

    token = null;
    state = {
        query: "",
        csv: []
    };

    onChange = e => {
        const { value } = e.target;
        this.setState({
            query: value
        });

        this.search(value);
    };


    search = query => {
        const url = ApiProvider.Add +`/auth/csv/search?q=${query}`;
        const token = {};
        this.token = token;

        fetch(url, requestInfo)
            .then(results => results.json())
            .then(data => {
                if (this.token === token) {
                    this.setState({ csv: data });
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
                        <h3 className="text-primary">Serviços</h3></div>
                    <div className="col-md-7 align-self-center">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">Home</li>
                            <li className="breadcrumb-item active">Serviços</li>
                        </ol>
                    </div>
                </div>

                <div className="container-fluid">


                    <div className="row">
                        <div className="col-md-10">
                            <div className="bgc-white bd bdrs-3 p-20 mB-20">
                                <div className="card ">
                                    <div className="card-body">

                                        <div className="row">
                                            <div className="input-group input-group-rounded col-md-8 mb-3 ">

                                                <input type="text" placeholder="Pesquisar Serviço Comum" name="search"
                                                       className="form-control" onChange={this.onChange}/>
                                            </div>
                                            <div className="text-right ">
                                                <Link className="btn cur-p btn-outline-success"
                                                      to={'/ServForm'}>Cadastrar</Link>

                                            </div>
                                        </div>
                                        <table className="table table-striped">
                                            <thead>
                                            <tr>

                                                <th scope="col">
                                                    Descrição
                                                </th>
                                                <th scope="col">
                                                    Valor
                                                </th>
                                                <th scope="col">
                                                    Obs.
                                                </th>

                                                <th scope="col">
                                                    Editar
                                                </th>
                                            </tr>
                                            </thead>
                                            {this.state.csv.map(csv => (
                                                <CsvPrev key={csv._id}{...csv}/>
                                            ))}

                                        </table>
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

