import React ,{Component} from "react";
import AsyncSelect from "react-select";
import Select, { components } from "react-select";
import ApiProvider from './../../../../gearUtils/util'


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

async function copyOptionsForAsync() {
    let response = await fetch(ApiProvider.Add+"/auth/customer", requestInfo);
    let data = await response.json();

    data.forEach(element => {
        let dropDownEle = { label: element["CusNam"], value: element };
        options1.push(dropDownEle);
    });
}

export default class Test extends Component {

    constructor(props) {
        super(props);

        this.state = {
            vehicle: [],
            CusCod:"",
            customer:[]
        };

    }

    handleOnchange = async () => {
        await copyOptionsForAsync();
        this.setState({ isSelected: true });
    };

    handleSelectChange = (event) => {
        const info = event.value
        this.setState({vehicle:info});


    }

    componentWillMount() {
        fetch(ApiProvider.Add+"/auth/cvn/"+ this.props.CusCod+"/search?q=", requestInfo)
            .then(res => res.json())
            .then( data => {
                this.setState({data:data});



                data.forEach(element => {
                    let dropDownEle = { label: element["CvnPlt"], value: element };
                    options1.push(dropDownEle);
                })
            })
    }



    render() {
        return (



            <div className="card ">
                <div className="card-body">
                    <div className="card-title">
                        <h4>Dados do veiculo </h4>

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
                            <label className="fw-500">Modelo</label>
                            <div className="timepicker-input input-icon form-group">

                                <p className="form-control-static">   </p>

                            </div>
                        </div>
                        <div className="col-md-3 mb-3">
                            <label className="fw-500">Fabricante</label>
                            <div className="timepicker-input input-icon form-group">

                                <p className="form-control-static">   </p>

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

                                <p className="form-control-static">  </p>

                            </div>
                        </div>
                        <div className="col-md-3 mb-3">
                            <label className="fw-500">Ano do modelo</label>
                            <div className="timepicker-input input-icon form-group">

                                <p className="form-control-static">  </p>

                            </div>
                        </div>
                        <div className="col-md-6 mb-3">

                            <label className="fw-500">Cilindrada (cm³)</label>

                            <p className="form-control-static"> </p>

                        </div>
                    </div>
                    <div className="row">

                        <div className="col-md-3 mb-3">
                            <div>
                                <label className="fw-500 text-center">Combustível</label>
                            </div>


                            <p className="form-control-static">  </p>

                        </div>
                        <div className="col-md-3 mb-3">
                            <div>
                                <label className="fw-500 text-center">Chassis</label>
                            </div>


                            <p className="form-control-static">  </p>

                        </div>


                    </div>


                    </div>
                </div>


        );
    }
}


