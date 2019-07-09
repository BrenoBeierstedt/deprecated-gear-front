import React ,{Component} from "react";
import AsyncSelect from "react-select";
import Select, { components } from "react-select";

import ApiProvider from '../../../gearUtils/apiMsc'

let options1 = [];
const ControlComponent = (props) => (
    <div >

        <components.Control {...props} />

    </div>

);



const requestInfo = {

    method: 'GET',

    headers: new Headers({

        'Authorization': localStorage.getItem('auth-token'),
    })
};


export default class DataSearch extends Component {

    constructor(props) {
        super(props);

        this.state = {
            customer: [],
        };

    }

    handleSelectChange = (event) => {
        const info = event.value
        this.setState({customer:info});
        this.props.cusRet(info)

    }

    componentWillMount() {

        fetch(ApiProvider.Add +"/auth/customer", requestInfo)
            .then(res => res.json())
            .then( data => {
                this.setState({data:data});



                data.forEach(element => {
                    let dropDownEle = { label: element["CusNam"], value: element };
                    options1.push(dropDownEle);
                })
            })
    }



    render() {
        return (



            <div className="card ">
                <div className="card-body">
                    <div className="card-title">
                        <h4>Dados do Cliente </h4>

                    </div>

                    <div className="row">
                        <div className="col-md-6 mb-md-5 ">
                            <div className="App">
                                <Select
                                    onChange={this.handleSelectChange}
                                    isClearable
                                    components={{ Control: ControlComponent }}
                                    isSearchable
                                    name="color"
                                    options={options1}
                                    asyncOptions={this.getOptions}


                                />

                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3 mb-3">

                            <label className="fw-500">Nome</label>

                            <p className="form-control-static">{this.state.customer.CusNam} </p>

                        </div>


                        <div className="col-md-3 mb-3">

                            <label className="fw-500">CPF/CNPJ</label>

                            <p className="form-control-static">{this.state.customer.CusSec} </p>

                        </div>
                        <div className="col-md-3 mb-3">

                            <label className="fw-500">E-mail</label>

                            <p className="form-control-static">{this.state.customer.CusEma} </p>

                        </div>
                        <div className="col-md-3 mb-3">

                            <label className="fw-500">Telefone</label>

                            <p className="form-control-static">{this.state.customer.Cf1Num} </p>

                        </div>


                    </div>
                </div>
            </div>

        );
    }
}


