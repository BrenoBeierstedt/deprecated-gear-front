// Importando o React
import React ,{Component} from "react";

import CusTable from "./cusTable"

import {fetchApi} from './../../../gearUtils/fetch/fetch'




export default class CusList extends Component {




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
                <CusTable/>

            </div>


        )
    }
}



