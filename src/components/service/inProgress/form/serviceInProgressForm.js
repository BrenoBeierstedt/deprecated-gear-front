import React, {Component} from "react";
import {Link} from "react-router-dom";
import Select from "react-select";

import ApiProvider from "../../../../gearUtils/apiMsc";
import history from "../../../history";

import {fetchApi} from "./../../../../gearUtils/fetch/fetch"


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

let copyOptionsForAsync = async (e)=> {
    options1=[];

    let url =apiLink  +  global.info+"/search?q=";
    let response = await fetch(url, requestInfo);

    let data = await response.json();

    data.forEach(element => {
        let dropDownEle = { label: element["CvnPlt"] + ",  "+element["MdlNam"], value: element };
        options1.push(dropDownEle);

    });

};


export default class ServInProForm extends Component {
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

    constructor(props) {
        super(props);
        this.state = {
            customer: [],
            vehicle: [],
            isSelected: false,
            CusCod:"",
            svcSts:"Cadastro Inicial",
            SipStt:"IPG"
        };
    }
    send(event) {
        event.preventDefault();
        const req = {

            body: {
                SipCus: this.state.customer.CusNam,
                Cf1Aco: this.state.customer.Cf1Aco,
                Cf1Num: this.state.customer.Cf1Num,
                CusCod: this.state.customer.CusCod,
                CvnPlt: this.state.vehicle.CvnPlt,
                CvnID: this.state.vehicle._id,

                MdlNam: this.state.vehicle.MdlNam,
                svcSts:this.state.svcSts,
                SipStt:this.state.SipStt,


            },
        };

        fetchApi('/auth/sip/', "POST", req.body )

            .then(token =>{
                history.push('/ServInProList')

            })
            .catch(error=>{
                this.setState({msg:error.message})
            })
    };

    cvnCallback = (vehicle) => {

        this.setState({vehicle:vehicle},function () {
            console.log(this.state.vehicle);
        });

    };
    handleOnchange = async (event) => {
        options1=[];
        global.info = event.value.CusCod;
        await copyOptionsForAsync();
        this.setState({ isSelected: true });
        copyOptionsForAsync( global.info);
        this.setState({customer:event.value})
    };


    render(){
        return(

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
                <form  id="needs-validation" onSubmit={this.send.bind(this)} >
                    <div className="col-md-12">
                            <div className="col-lg-12  ">
                                <div className="card ">
                                    <div className="card-body">
                                        <div className="card-title">
                                            <h4>Dados do Cliente </h4>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6 mb-md-5 ">
                                                <Select
                                                    name="option"
                                                    options={options}
                                                    onChange={this.handleOnchange}
                                                />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-3 mb-3">
                                                <label className="fw-500">Nome</label>
                                                <p className="form-control-static">{this.state.customer.CusNam} </p>
                                            </div>
                                            <div className="col-md-3 mb-3">
                                                <label className="fw-500">CPF/CNPJ</label>
                                                <p className="form-control-static"> {this.state.customer.CusSec}</p>
                                            </div>
                                            <div className="col-md-3 mb-3">
                                                <label className="fw-500">E-mail</label>
                                                <p className="form-control-static">{this.state.customer.CusEma} </p>
                                            </div>
                                            <div className="col-md-3 mb-3">
                                                <label className="fw-500">Telefone</label>
                                                <p className="form-control-static"> {this.state.customer.Cf1Num}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {this.state.isSelected ? <App1  callBack={this.cvnCallback} /> : null}
                            </div>
                        <div className="text-right  mb-lg-5">
                            <Link className="btn cur-p btn-info m-b-1 m-lg-2" to={'/ServInProList'}>Cancelar</Link>
                            <button className="btn cur-p btn-success m-b-1 m-lg-2" type="submit">Salvar</button>
                        </div>
                    </div>
                </form>
            </div>

        )
    }
}


class App1 extends React.Component {

    state={
        vehicle:[]
    };

    handleSelectChange = (event) => {
        const info = event.value;
        this.props.callBack(info);
        this.setState({vehicle:[]});
        this.setState({vehicle:event.value}
        );

    };


    render() {

        return (
            <div className="card ">
                <div className="card-body">
                    <div className="card-title">
                        <h4>Dados do Veiculo </h4>
                    </div>
                    <div className="row">
                        <div className="col-md-6 mb-md-5 ">
                            <div className="App">
                                <Select name="options2"
                                        options={options1}
                                        onChange={this.handleSelectChange}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3 mb-3">
                        <label className="fw-500">Modelo</label>
                        <div className="timepicker-input input-icon form-group">
                            <p className="form-control-static" >{this.state.vehicle.MdlNam}</p>
                        </div>
                    </div>
                    <div className="col-md-3 mb-3">
                        <label className="fw-500">Fabricante</label>
                        <div className="timepicker-input input-icon form-group">
                            <p className="form-control-static"> {this.state.vehicle.MnfNam}  </p>
                        </div>
                    </div>
                    <div className="col-md-6 mb-3">
                        <label className="fw-500">Placa</label>
                        <p className="form-control-static"> {this.state.vehicle.CvnPlt} </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3 mb-3">
                        <label className="fw-500">Ano de fabricação</label>
                        <div className="timepicker-input input-icon form-group">
                            <p className="form-control-static"> {this.state.vehicle.CvnFby} </p>
                        </div>
                    </div>
                    <div className="col-md-3 mb-3">
                        <label className="fw-500">Ano do modelo</label>
                        <div className="timepicker-input input-icon form-group">
                            <p className="form-control-static"> {this.state.vehicle.CvnMdy} </p>
                        </div>
                    </div>
                    <div className="col-md-6 mb-3">
                        <label className="fw-500">Cilindrada (cm³)</label>
                        <p className="form-control-static">{this.state.vehicle.CvnPlt} </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3 mb-3">
                        <div>
                            <label className="fw-500 text-center">Combustível</label>
                        </div>
                        <p className="form-control-static"> {this.state.vehicle.CvnFtp} </p>
                    </div>
                    <div className="col-md-3 mb-3">
                        <div>
                            <label className="fw-500 text-center">Chassis</label>
                        </div>
                        <p className="form-control-static"> {this.state.vehicle.CvnCch} </p>
                    </div>
                </div>
            </div>
        );
    }
}
