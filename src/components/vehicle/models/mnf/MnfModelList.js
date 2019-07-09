import React ,{Component} from "react";
import  MnfPrev from "./mnfPrev";
import {Link} from "react-router-dom";
import {fetchApi} from "../../../../gearUtils/fetch/fetch";




export default class MnfModelList extends Component {

    token = null;
    state = {
        query: "",
        mnf: []
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
fetchApi(`/auth/mnf/search?q=${query}`, "GET")

            .then(data => {
                if (this.token === token) {
                    this.setState({ mnf: data });
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
                        <h3 className="text-primary">Modelos</h3></div>
                    <div className="col-md-7 align-self-center">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="javascript:void(0)">Home</a></li>
                            <li className="breadcrumb-item active">Modelos</li>
                        </ol>
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="col-lg-12  ">
                                <div className="card ">
                                    <div className="card-body">


                                        <div className="row">

                                            <div className="input-group input-group-rounded col-md-6 mb-3 ">

                                                <input type="text" placeholder="Pesquisar Modelo" name="search"
                                                       className="form-control" onChange={this.onChange}/>



                                            </div>


                                            <div className="col-md-5 mb-6 ">
                                                <Link className="btn cur-p btn-outline-success" to={"/vehiModForm"}>
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
                                                        Fabricante
                                                    </th>

                                                    <th scope="col">
                                                        Editar
                                                    </th>
                                                </tr>
                                                </thead>
                                                {this.state.mnf.map(mnf => (
                                                    <MnfPrev key={mnf._id}{...mnf}/>
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



