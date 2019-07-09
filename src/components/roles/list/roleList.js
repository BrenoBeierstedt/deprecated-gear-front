import React ,{Component} from "react";

import RoleTable from "./roleTable"

export default class RoleList extends Component {


    render() {
        return (


            <div className="page-wrapper">

                <div className="row page-titles">
                    <div className="col-md-5 align-self-center">
                        <h3 className="text-primary">Papéis</h3></div>
                    <div className="col-md-7 align-self-center">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="javascript:void(0)">Home</a></li>
                            <li className="breadcrumb-item active">Papéis</li>
                        </ol>
                    </div>
                </div>
                <RoleTable/>

            </div>


        )
    }
}



