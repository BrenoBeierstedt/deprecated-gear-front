// Importando o React
import React ,{Component} from "react";
import  PrtPrev from "./prtPrev";
import {Link} from "react-router-dom";

import ApiProvider from './../../../../gearUtils/util'


const token = localStorage.getItem('auth-token');

const requestInfo = {

    method: 'GET',

    headers: new Headers({

        'Authorization': token,
    })
};

    export default class PartsList extends Component {

    constructor(){
        super();
        this.state = {data:[]};
    };

    componentWillMount() {

        fetch(ApiProvider.Add+'/auth/part', requestInfo)
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
                        <h3 className="text-primary">Peças</h3></div>
                    <div className="col-md-7 align-self-center">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="javascript:void(0)">Home</a></li>
                            <li className="breadcrumb-item active">Peças</li>
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

                                                    <input type="text" placeholder="Descrição" name="search"
                                                           className="form-control" ref={input => this.cliente = input}/>

                                                    <button className="btn btn-primary btn-group-right" type="submit">
                                                        <i className="ti-search"/></button>

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
                                            { this.state.data.map(data =>
                                                <PrtPrev key={data._id}{...data}/>
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

        )
    }
}



