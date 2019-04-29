import React, {Component} from "react";
import ApiProvider from "../gearUtils/util";



const requestInfo = {

    method: 'GET',

    headers: new Headers({

        'Authorization': localStorage.getItem('auth-token'),
    })
};

export default class App extends Component {


    token = null;
    state = {

        counter: ""
    };






    componentWillMount() {

            const url = ApiProvider.Add +`/auth/counter/sip`;
            const token = {};
            this.token = token;

            fetch(url, requestInfo)
                .then(results => results.json())
                .then(data => {
                    if (this.token === token) {
                        this.setState({ counter: data });
                    }
                });

    }
    render(){
        return(
            <div className=" col-lg-12">
                <div className="row">


                <div className="col-md-4" >
                    <div className="card p-30">
                        <div className="media" >
                            <div className="media-left meida media-middle">
                                <span ><i className="fa fa-usd f-s-40 color-primary"/></span>
                            </div>
                            <div className="media-body media-text-right">
                                <h2>568120</h2>
                                <p className="m-b-0">Agendados</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card p-30">
                        <div className="media">
                            <div className="media-left meida media-middle">
    <span><i className="fa fa-shopping-cart f-s-40 color-success"/></span>
                            </div>
                            <div className="media-body media-text-right">
                                <h2>{this.state.counter}</h2>
                                <p className="m-b-0">Em andamento</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card p-30">
                        <div className="media">
                            <div className="media-left meida media-middle">
                                <span><i className="fa fa-archive f-s-40 color-warning"/></span>
                            </div>
                            <div className="media-body media-text-right">
                                <h2>25</h2>
                                <p className="m-b-0">Pátio</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}