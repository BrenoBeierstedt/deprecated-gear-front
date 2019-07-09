// Importando o React
import React, {Component} from "react";
import {Link} from "react-router-dom";
import Select from "react-select";

import ApiProvider from "../../../gearUtils/apiMsc";
import history from "../../history";




global.info = null;
let options = [];
let options1 = [];
let options2=[];
let apiLink=ApiProvider.Add;
const requestInfo = {

    method: 'GET',

    headers: new Headers({

        'Authorization': localStorage.getItem('auth-token'),
    })
};

//after first select onChange
let copyOptionsForAsync = async (e)=> {
    options1=[];

    let url =apiLink +"/auth/mnf/search?q=";
    let response = await fetch(url, requestInfo);

    let data = await response.json();

    data.forEach(element => {
        let dropDownEle = { label: element["name"], value: element };
        options1.push(dropDownEle);

    });

}


export default class VehiCusForm extends Component {
    // return customers
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
//constructor
    constructor(props) {
        super(props);
        this.state = {
            customer: [],
            vehicle: [],
            isSelected: false,
            CusCod:"",
        };
    }

// Customer select onChange

    handleOnchange = async (event) => {
        options1=[];
        await copyOptionsForAsync();
        this.setState({ isSelected: true });
        copyOptionsForAsync( global.info);
        this.setState({customer:event.value})
    };


//Vehicle select callback
    cvnCallback = (vehicle) => {

        this.setState({vehicle:vehicle},function () {
            console.log(this.state.vehicle);
        });

    };
//Back return form

    send(event) {
        event.preventDefault();
        const requestInfoPost = {

            method: 'POST',
            body: JSON.stringify({
                CusNam: this.state.customer.CusNam,
                CusCod: this.state.customer.CusCod,

                MdlNam: this.state.vehicle.name,
                MnfNam:this.state.vehicle.marca,
                CvnCch: this.CvnCch.value,
                CvnPlt: this.CvnPlt.value,
                CvnFtp: this.CvnFtp.value,
                CvnFby: this.CvnFby.value,
                CvnMdy: this.CvnMdy.value,

            }),
            headers: new Headers({
                'content-type': 'application/json',
                'Authorization': localStorage.getItem('auth-token'),
            })
        };
        fetch(ApiProvider.Add+'/auth/costumervehicle/', requestInfoPost)
            .then(res => {

                if(res.ok){
                    return res.text();
                }else {
                    throw new Error('Não foi possivel.')
                }
            })
            .then(token =>{

                history.push('/')

            })
            .catch(error=>{
                this.setState({msg:error.message})
            })
    };
    render(){
        return(

            <div className="page-wrapper">

                <div className="row page-titles">
                    <div className="col-md-5 align-self-center">
                        <h3 className="text-primary">Cadastro de veiculo</h3></div>
                    <div className="col-md-7 align-self-center">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">Home</li>

                            <li className="breadcrumb-item active">Cadastro de veiculo</li>
                        </ol>
                    </div>
                </div>

                <div className="col-md-12">
                    <div className="col-lg-12  ">

                        <form  id="needs-validation" onSubmit={this.send.bind(this)} >


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


                            {this.state.isSelected ?
                                <div className="card ">
                                    <div className="card-body">
                                        <div className="card-title">
                                            <h4>Dados do veiculo </h4>

                                        </div>

                                        <div className="row">
                                            <div className="col-md-6 mb-3">

                                                <label className="fw-500" htmlFor="validationCustom01">Placa</label>
                                                <input type="text" className="form-control" id="validationCustom10"
                                                       placeholder="Placa" ref={input => this.CvnPlt = input} required/>
                                            </div>
                                            <div className="col-md-6 mb-3">

                                                <label className="fw-500" htmlFor="validationCustom01">Chassis</label>
                                                <input type="text" className="form-control" id="validationCustom10"
                                                       placeholder="Chassis" ref={input => this.CvnCch = input} required/>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6 mb-3">
                                                <div>
                                                    <label className="fw-500 text-center"
                                                           htmlFor="validationCustom01">Combustível</label>
                                                </div>

                                                <div className="btn-group text-center">
                                                    <div>
                                                        <select id="question_type"
                                                                className="btn btn-light dropdown-toggle" ref={input => this.CvnFtp = input}>
                                                            <option name="fisica">Gasolina</option>
                                                            <option name="fisica">Etanol</option>
                                                            <option name="juricida">Diesel</option>
                                                            <option name="juricida">Flex</option>
                                                        </select>
                                                        <script>
                                                            alert($("#question_type option:selected").attr('name'));
                                                        </script>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-3 mb-3">

                                                <label className="fw-500" htmlFor="validationCustom01">Ano Fabricação</label>
                                                <input type="number" className="form-control" id="validationCustom10"
                                                       placeholder="Placa" ref={input => this.CvnFby = input} required/>
                                            </div>
                                            <div className="col-md-3 mb-3">

                                                <label className="fw-500" htmlFor="validationCustom01">Ano Modelo</label>
                                                <input type="number" className="form-control" id="validationCustom10"
                                                       placeholder="Placa" ref={input => this.CvnMdy = input} required/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                : null}



                            <div className="text-right ">

                                <Link className="btn cur-p btn-info m-b-10 m-l-5" to={'/ServInProList'}>Cancelar</Link>


                                <button className="btn cur-p btn-success m-b-10 m-l-5" type="submit">Salvar</button>

                            </div>
                        </form>

                    </div>
                </div>

            </div>




        )
    }
}
global.infomnf = null;
let copyOptionsForAsyncVhp = async (e)=> {
    options2=[];

    let url =apiLink +"/auth/vhp/"+ global.infomnf +"/search?q=";
    let response = await fetch(url, requestInfo);

    let data = await response.json();

    data.forEach(element => {
        let dropDownEle = { label: element["name"], value: element };
        options2.push(dropDownEle);

    });

};
class App1 extends React.Component {

    state={
        vehicle:[],
        isSelect: false,

    };

    handleSelectChange = (event) => {
        const info = event.value;
        this.props.callBack(info);


        this.setState({vehicle:[]});
        this.setState({vehicle:event.value}
        );

    };
    handleOnchangemnf = async (event) => {
        options2=[];

        global.infomnf = event.value.name;
        await copyOptionsForAsyncVhp();
        this.setState({ isSelect: true });
        copyOptionsForAsyncVhp( global.info);
        this.setState({customer:event.value})
    };


    render() {

        return (

            <div className="card ">
                <div className="card-body">
                    <div className="card-title">
                        <h4>Dados do modelo </h4>

                    </div>

                    <div className="row">
                        <div className="col-md-6 mb-md-5 ">
                            <label className="fw-500">Fabricante</label>
                            <div className="App">
                                <Select name="options2"
                                        options={options1}
                                        onChange={this.handleOnchangemnf}
                                />
                            </div>

                        </div>
                        {this.state.isSelect ?
                            <div className="col-md-6 mb-md-5 ">
                                <label className="fw-500">Modelo</label>
                                <div className="App">
                                    <Select name="options2"
                                            options={options2}
                                            onChange={this.handleSelectChange}
                                    />
                                </div>

                            </div>
                            : null}
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3 mb-3">
                        <label className="fw-500">Modelo</label>
                        <div className="timepicker-input input-icon form-group">

                            <p className="form-control-static" >{this.state.vehicle.name}</p>

                        </div>
                    </div>
                    <div className="col-md-3 mb-3">
                        <label className="fw-500">Fabricante</label>
                        <div className="timepicker-input input-icon form-group">

                            <p className="form-control-static"> {this.state.vehicle.fipe_marca}  </p>

                        </div>
                    </div>

                </div>



            </div>
        );
    }
}
