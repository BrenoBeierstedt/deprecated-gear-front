// Importando o React
import React, {Component} from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import {Link} from "react-router-dom";
import 'react-tabs/style/react-tabs.css';
import ProfileData from "./tabs/profileData";
import Roles from "./tabs/roles";
import history from "../../history";
import {fetchApi} from "../../../gearUtils/fetch/fetch";


export default class UserForm extends Component {


    constructor(props) {
        super(props);
        this.state = {
            fullName:'',
            username: '',
            email: '',
            isActive: true,
            roles:[]

        };
    }




    send(event) {

        event.preventDefault();

        const req = {
            body: {
                fullName : this.state.fullName,
                username: this.state.username,
                email: this.state.email,
                password: this.state.password,
                isActive: true,
                roles:this.state.roles

            },

        };
        fetchApi('/auth/user/register', "POST", req.body )

            .then(token =>
                    console.log("Cadastro realizado com sucesso: "),

                history.push('/userlist')

            )
            .catch(error=>
                console.log("erro ao cadastrar, erro: "+error.message),
            )
    };


    handleProfileChange = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
        console.log(this.state)
    };
    roleCallback = e=>{

        this.setState({roles: e})
        console.log(this.state)

    }


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

                                        </header>
<div className="m-l-10">
                                        <h3 >{this.state.fullName}</h3>
</div>
                                        <div className="desc m-l-10">
                                            <h4>{this.state.email}</h4>
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
                                            <ProfileData handleProfileChange={this.handleProfileChange} user={this.state} />
                                        </TabPanel>
                                        <TabPanel>
                                            <Roles  callback={this.roleCallback} roles={this.state.roles}/>
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

