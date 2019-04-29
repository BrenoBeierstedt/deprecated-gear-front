// Importando o React
import React ,{Component} from "react";


import SipTable from './sipTable';

const token = localStorage.getItem('auth-token');


export default class ServInProList extends Component {




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
                <SipTable/>
            </div>

        )
    }
}



