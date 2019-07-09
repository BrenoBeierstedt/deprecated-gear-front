import React ,{Component} from "react";
import Select, { components } from "react-select";
import {fetchApi} from "../../../gearUtils/fetch/fetch";


let options1 = [];
const ControlComponent = (props) => (
    <div >

        <components.Control {...props} />

    </div>

);





export default class CustomerSelect extends Component {
    state = {};





    componentWillMount() {

        fetchApi('auth/customer', "GET")

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
            <div className="col-md-12 mb-3">
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

        );
    }
}


