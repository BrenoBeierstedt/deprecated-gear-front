import {Link} from "react-router-dom";
import SipPrev from "./sipPrev";
import React, {Component} from "react";
import ApiProvider from "../../../../gearUtils/apiMsc";

const token = localStorage.getItem('auth-token');


const requestInfo = {

    method: 'GET',

    headers: new Headers({

        'Authorization': token,
    })
};


export default class sipTable extends Component {


    token = null;
    state = {
        query: "",
        sip: []
    };

    onChange = e => {
        const { value } = e.target;
        this.setState({
            query: value
        });

        this.search(value);
    };


    search = query => {
        const url = ApiProvider.Add +`/auth/l/sip/search?q=${query}`;
        const token = {};
        this.token = token;

        fetch(url, requestInfo)
            .then(results => results.json())
            .then(data => {
                if (this.token === token) {
                    this.setState({ sip: data });
                }
            });
    };

    componentDidMount() {
        this.search("");
    }

    render()
    {
        return (
            <div className="col-md-12">
                <div className="row bg-white m-l-0 m-r-0 box-shadow ">
                    <div className="col-lg-12  ">
                        <div className="card ">
                            <div className="card-body">

                                <div className="card-title">
                                    <h4>Serviços em andamento </h4>
                                </div>
                                <div className="row">

                                    <form className="col-md-4 mb-6 "  >
                                        <div className="input-group input-group-rounded col-md-16 mb-3 ">

                                            <input type="text" placeholder="Pesquisar placa" name="search"
                                                   className="form-control" onChange={this.onChange}/>


                                        </div>
                                    </form>

                                    <div className="col-md-5 mb-6 ">
                                        <Link className="btn cur-p btn-outline-success" to="/ServInProForm">
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
                                                Cód. Serviço</th>
                                            <th scope="col">
                                                Cliente</th>
                                            <th scope="col">
                                                Veiculo</th>
                                            <th scope="col">
                                                Placa</th>
                                            <th scope="col">
                                                Status</th>
                                            <th scope="col">
                                                Editar/Avançar</th>
                                        </tr>
                                        </thead>
                                        { this.state.sip.map(sip =>
                                            <SipPrev key={sip._id}{...sip}/>
                                        )}
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
