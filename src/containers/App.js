import React, { Component } from 'react';
import ApiProvider from './../gearUtils/util'

import SipPrev from './../components/service/inProgress/list/sipPrev'

import {Link} from "react-router-dom";
import SpecMain from './SpecMain'
import SipTable from './../components/service/inProgress/list/sipTable'


const token = localStorage.getItem('auth-token');

const requestInfo = {

    method: 'GET',

    headers: new Headers({

        'Authorization': token,
    })
};

export default class App extends Component {

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
        if(!localStorage.getItem("Refresh")){
            localStorage.setItem("Refresh","ok");
            window.location.reload();
        }
    }
    render() {

        return (

            <div className="page-wrapper">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="row">
                                <SpecMain/>
                                <SipTable/>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        );
    }
}



