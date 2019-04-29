// Importando o React
import React ,{Component} from "react";

import {Link} from "react-router-dom";
import EmpPrev from "./empPrev";

import ApiProvider from './../../../gearUtils/util'
import CusPrev from "../../customer/list/customerList";


const token = localStorage.getItem('auth-token');

const requestInfo = {

    method: 'GET',

    headers: new Headers({

        'Authorization': token,
    })
};



export default class EmpList extends Component {

    token = null;
    state = {
        query: "",
        employee: []
    };

    onChange = e => {
        const { value } = e.target;
        this.setState({
            query: value
        });

        this.search(value);
    };


    search = query => {
        const url = ApiProvider.Add +`/auth/emp/search?q=${query}`;
        const token = {};
        this.token = token;

        fetch(url, requestInfo)
            .then(results => results.json())
            .then(data => {
                if (this.token === token) {
                    this.setState({ employee: data });
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
                <h3 className="text-primary">Funcionários</h3></div>
            <div className="col-md-7 align-self-center">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="javascript:void(0)">Home</a></li>
                    <li className="breadcrumb-item active">Funcionários</li>
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


                                            <input type="text" placeholder="Pesquisar Empregado" name="search"
                                                   className="form-control" onChange={this.onChange}/>

                                        </div>
                                    </form>
                                    <div className="text-right ">
                                        <Link className="btn cur-p btn-outline-success" to="/EmpForm">Cadastrar</Link>

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
                                            Editar
                                        </th>
                                    </tr>
                                    </thead>

                                        {this.state.employee.map(employee => (
                                            <EmpPrev key={employee._id}{...employee}/>
                                        ))}



                                </table>
                                </div>
                            </div>
                        </div>
                    </div>



                </div>

                <div>
                </div>
            </div>
        </div>
    </div>


        )}
}

