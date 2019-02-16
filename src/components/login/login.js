import React, {Component} from "react";
import history from "../history"

import ApiProvider from './../../gearUtils/util'


const getUrlParameter = (name) => {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    let regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    let results = regex.exec(window.location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};

export default class Login extends Component {




    constructor(){
        super();
        this.state = {msg:''};

    }

    send(event){
        event.preventDefault();

        const requestInfo={
          method:'POST',
          body:JSON.stringify({login:this.login.value,password:this.password.value}),
            headers: new Headers({
                'content-type':'application/json'
            })
        };

        fetch(ApiProvider.Add+'/auth/login/', requestInfo)
            .then(res => {
                if(res.ok){
                    return res.text();
                }else {
                throw new Error('Usuário ou senha incorreto.')
                }
            })
            .then(token =>{
                localStorage.setItem('auth-token',token);
                history.push('/cusList')

            })
            .catch(error=>{
                this.setState({msg:error.message})
            })
    }

    render() {
        return(

<div>
        <div className="preloader">
            <svg className="circular" viewBox="25 25 50 50">
                <circle className="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/>
            </svg>
        </div>

        <div id="main-wrapper">


            <div className="unix-login">
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-lg-4">
                            <div className="login-content card">
                                <div className="login-form">
                                    <span >
                                        {this.state.msg || getUrlParameter('msg')}
                                     </span>

                                    <h4> <img src="images/logo.png"/>GEAR</h4>
                                    <form onSubmit={this.send.bind(this)}>
                                        <div className="form-group">
                                            <label>Usuário</label>
                                            <input type="text" ref={(input) => this.login = input} className="form-control" placeholder="Usuário"/>
                                        </div>
                                        <div className="form-group">
                                            <label>Senha</label>
                                            <input type="password" ref={(input) => this.password = input} className="form-control" placeholder="Senha"/>
                                        </div>
                                        <div className="checkbox">

                                            <label className="pull-right">
                                                <a href="#">Esqueci a senha</a>
                                            </label>

                                        </div>
                                        <button type="submit" className="btn btn-primary btn-flat m-b-30 m-t-30">Entrar</button>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
</div>


        ) }


}