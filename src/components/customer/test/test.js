import React, {Component} from 'react';
import Select from "react-select";

import Modal from "./testModal";
import ApiProvider from "../../../gearUtils/util";



global.info = null;
let options = [];
let options1 = [];
let apiLink=ApiProvider.Add+"/auth/cvn/";
const requestInfo = {

    method: 'GET',

    headers: new Headers({

        'Authorization': localStorage.getItem('auth-token'),
    })
};

let copyOptionsForAsync = async ()=> {
    options1=[]

    let url =apiLink  +  global.info+"/search?q=";
    let response = await fetch(url, requestInfo);

    let data = await response.json();

    data.forEach(element => {
        let dropDownEle = { label: element["CvnPlt"], value: element };
        options1.push(dropDownEle);
    });
}


class Test extends Component {

    componentWillMount() {

        fetch(ApiProvider.Add +"/auth/customer", requestInfo)
            .then(res => res.json())
            .then( data => {


                data.forEach(element => {
                    let dropDownEle = { label: element["CusNam"], value: element };
                    options.push(dropDownEle);
                })
            })
    }

        constructor() {
            super();
            this.state = {
                customer: [],
                isSelected: false,
                CusCod:""
            };
        }

        handleOnchange = async (event) => {
        options1=[]
             global.info = event.value.CusCod
            await copyOptionsForAsync();
            this.setState({ isSelected: true });
            copyOptionsForAsync( global.info)
        };



        render() {
            return (

                <div className="page-wrapper">

                    <div className="row page-titles">
                        <div className="col-md-5 align-self-center">
                            <h3 className="text-primary">Novo serviço</h3></div>
                        <div className="col-md-7 align-self-center">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">Home</li>

                                <li className="breadcrumb-item active">Novo serviço</li>
                            </ol>
                        </div>
                    </div>

                    <div className="container-fluid">


                        <div className="masonry-item col-md-9">
                            <div className="bgc-white p-20 bd">

                                <div className="mT-30">
                                    <Select
                        name="option"
                        options={options}
                        onChange={this.handleOnchange}

                    />
                    {this.state.isSelected ? <App1 /> : null}
                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }

    class App1 extends React.Component {

    render() {
        return (
            <div className="App">
                <Select name="options2"
                        options={options1}
                      />
            </div>
        );
    }
}
export default Test;