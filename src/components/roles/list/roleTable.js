import {Link} from "react-router-dom";
import RolePrev from "./rolePrev";
import React, {Component} from "react";
import {fetchApi} from "../../../gearUtils/fetch/fetch";


export default class roleTable extends Component {

    token = null;
    state = {
        query: "",
        role: []
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
        fetchApi(`/auth//security/roles/search?q=${query}`, "GET" )

            .then(data => {
                if (this.token === token) {
                    this.setState({ role: data });
                }
            });
    };

    componentDidMount() {
        this.search("");
    }
    render() {
        return (

            <div className="col-md-12">
                <div className="row bg-white m-l-0 m-r-0 box-shadow ">
                    <div className="col-lg-12  ">
                        <div className="card ">
                            <div className="card-body">


                                <div className="row">

                                    <div className="input-group input-group-rounded col-md-6 mb-3 ">

                                        <input type="text" placeholder="Pesquisar papel" name="search"
                                               className="form-control" onChange={this.onChange}/>


                                    </div>


                                    <div className="col-md-5 mb-6 ">
                                        <Link className="btn cur-p btn-outline-success" to="/roleform">
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
                                                Código
                                            </th>
                                            <th scope="col">
                                                Nome
                                            </th>
                                            <th scope="col">
                                                Descrição
                                            </th>
                                            <th scope="col">
                                                Editar
                                            </th>
                                        </tr>
                                        </thead>
                                        {this.state.role.map(role => (
                                            <RolePrev key={role._id}{...role}/>
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
