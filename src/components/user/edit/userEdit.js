import React, {Component} from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import {Link} from "react-router-dom";
import 'react-tabs/style/react-tabs.css';
import ProfileData from "./tabs/profileData";
import Roles from "./tabs/roles";
import history from "../../history";
import {fetchApi} from "../../../gearUtils/fetch/fetch";



export default class CusForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: "",
            vehicle: [],
            isSelected: false,
            CusCod:"",

        };
    }



    componentDidMount() {
        let id = this.props.match.params.id

        let handle = "/auth/security/edit/user/"+id;

        fetchApi(handle, "GET")
            .then(data => {

                    this.setState({ user: data });

            });
    }

    send(event) {
        event.preventDefault();
        const req = {


            body: {
                roles: [this.state.roles],


            },

        };
        fetchApi('/auth/user/edit/1', "PUT", req.body )

            .then(token =>{

                history.push('/userlist')

            })
            .catch(error=>{
                this.setState({msg:error.message})
            })
    };


    state = {

        roles: [],
    };
    roleCallback = (event) => {
        this.setState({
            roles:event
        });
    };



    render() {
        return (


            <div className="page-wrapper">

                <div className="row page-titles">
                    <div className="col-md-5 align-self-center"><h3 className="text-primary">Usuário</h3>
                    </div>
                    <div className="col-md-7 align-self-center">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">Home</li>
                            <li className="breadcrumb-item active">Usuário</li>
                        </ol>
                    </div>
                </div>

                <div className="col-md-12">
                    <div className="col-lg-12  ">
                        <form  id="needs-validation" onSubmit={this.send.bind(this)} >
                            <div className="card">
                                <div className="card-body">
                                    <div className="card-two">
                                        <header>
                                            <div className="avatar">
                                                <img src="https://randomuser.me/api/portraits/women/21.jpg"
                                                     alt="Allison Walker"/>
                                            </div>
                                            <div className="text-right">

                                            <button type="button"
                                                    className="btn btn-danger btn-outline btn-rounded m-b-10 m-l-5 ">Inativo
                                            </button>
                                            </div>
                                        </header>

                                        <h3>{this.state.user.username}</h3>
                                        <div className="desc">
                                            <h6>Desde {this.state.user.createdAt}</h6>
                                            <h4>{this.state.user.email} </h4>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title">Configurações</h4>
                                    <Tabs >
                                        <TabList>
                                            <Tab>Perfil</Tab>
                                            <Tab>Organizacional</Tab>
                                        </TabList>

                                        <TabPanel>
                                            <ProfileData callback={this.roleCallback} key={this.state.CusCod} user={this.state.user}/>
                                        </TabPanel>
                                        <TabPanel>
                                            <Roles callback={this.roleCallback} key={this.state.CusCod} roles={this.state.user.roles} />
                                        </TabPanel>
                                    </Tabs>
                                </div>
                            </div>
                            <div className="text-right">
                                <Link className="btn cur-p btn-info m-b-10 m-l-5" to="/userlist"> Cancelar</Link>

                                <button className="btn cur-p btn-success m-b-10 m-l-5"  type="submit">Salvar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        )
    }
};

