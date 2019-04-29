import React ,{Component} from "react";
import Select, { components } from "react-select";



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


export default class CustomerSelect extends Component {
    state = {};





    componentWillMount() {

        fetch("http://187.87.109.66:3005/auth/customer", requestInfo)
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


