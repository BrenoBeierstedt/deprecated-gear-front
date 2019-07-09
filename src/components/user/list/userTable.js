import {Link} from "react-router-dom";
import UserPrev from "./userPrev";
import React, {Component} from "react";
import {fetchApi} from "../../../gearUtils/fetch/fetch";


export default class userTable extends Component {

    token = null;
    state = {
        query: "",
        user: []
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
        fetchApi(`/auth/security/user/search?q=${query}`, "GET" )

            .then(data => {
                if (this.token === token) {
                    this.setState({ user: data });
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

                                                <input type="text" placeholder="Pesquisar Cliente" name="search"
                                                       className="form-control" onChange={this.onChange}/>


                                            </div>


                                            <div className="col-md-5 mb-6 ">
                                                <Link className="btn cur-p btn-outline-success" to="/userform">
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
                                                        Nome
                                                    </th>

                                                    <th scope="col">
                                                        E-mail
                                                    </th>
                                                    <th scope="col">
                                                        Editar
                                                    </th>
                                                </tr>
                                                </thead>

                                                {this.state.user.map(user => (
                                                    <UserPrev key={user._id}{...user}/>
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
