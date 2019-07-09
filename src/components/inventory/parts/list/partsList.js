// Importando o React
import React ,{Component} from "react";
import  PrtPrev from "./prtPrev";
import {Link} from "react-router-dom";

import ApiProvider from '../../../../gearUtils/apiMsc'
import CusPrev from "../../../customer/list/customerList";
import {fetchApi} from "../../../../gearUtils/fetch/fetch";




    export default class PartsList extends Component {

        token = null;
        state = {
            query: "",
            parts: []
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
fetchApi(`/auth/parts/search?q=${query}`,"GET")
                .then(data => {
                    if (this.token === token) {
                        this.setState({ parts: data });
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
                        <h3 className="text-primary">Peças</h3></div>
                    <div className="col-md-7 align-self-center">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="javascript:void(0)">Home</a></li>
                            <li className="breadcrumb-item active">Peças</li>
                        </ol>
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="col-lg-12  ">
                                <div className="card ">
                                    <div className="card-body">


                                        <div className="row">

                                            <form className="col-md-4 mb-6 "  >
                                                <div className="input-group input-group-rounded col-md-16 mb-3 ">

                                                    <input type="text" placeholder="Pesquisar Peça" name="search"
                                                           className="form-control" onChange={this.onChange}/>

                                                </div>
                                            </form>

                                            <div className="col-md-5 mb-6 ">
                                                <Link className="btn cur-p btn-outline-success" to="/partsForm">
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
                                                    Descrição
                                                </th>
                                                <th scope="col">
                                                    Estado
                                                </th>
                                                <th scope="col">
                                                    Preço
                                                </th>
                                                <th scope="col">
                                                    Editar
                                                </th>
                                            </tr>
                                            </thead>
                                                {this.state.parts.map(parts => (
                                                    <PrtPrev key={parts._id}{...parts}/>
                                                ))}
                                        </table>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


        )
    }
}



