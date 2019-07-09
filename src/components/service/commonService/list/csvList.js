import React, {Component} from "react";
import {Link} from "react-router-dom";
import ApiProvider from "../../../../gearUtils/apiMsc";

import  CsvPrev from "./CsvPrev";
import {fetchApi} from "../../../../gearUtils/fetch/fetch";






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
        const token = {};
        this.token = token;

        fetchApi(`/auth/csv/search?q=${query}`, "GET")
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

                <div className="col-md-12">
                    <div className="col-lg-12  ">
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


        );
    }
}

