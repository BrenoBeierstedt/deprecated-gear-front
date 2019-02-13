// Importando o React
import React ,{Component} from "react";

import {Link} from "react-router-dom";
import EmpPrev from "./empPrev";


const token = localStorage.getItem('auth-token');

const requestInfo = {

    method: 'GET',

    headers: new Headers({

        'Authorization': token,
    })
};



export default class EmpList extends Component {


    constructor(){
        super();
        this.state = {data:[]};
    };

    componentWillMount() {

        fetch('http://187.87.109.66:3005/auth/employee', requestInfo)
            .then(res => res.json())
            .then( data => {
                this.setState({data:data});

            })
            .catch(function (error) {
                console.log(error)
            })
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

                                            <input type="text" placeholder="Nome" name="search"
                                                   className="form-control" ref={input => this.cliente = input}/>

                                            <button className="btn btn-primary btn-group-right" type="submit">
                                                <i className="ti-search"/></button>

                                        </div>
                                    </form>
                                    <div className="text-right ">
                                        <Link className="btn cur-p btn-outline-success" to="/EmpForm">Cadastrar</Link>

                                    </div>
                                </div>
                                <table className="table table-striped">
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

                                    { this.state.data.map(data =>
                                        <EmpPrev key={data.EmpCod}{...data}/>
                                    )}



                                </table>
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

