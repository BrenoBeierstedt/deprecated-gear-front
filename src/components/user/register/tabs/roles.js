import React, {Component} from "react";
import {fetchApi} from '../../../../gearUtils/fetch/fetch';

import Select from 'react-select';
import makeAnimated from 'react-select/lib/animated';

let options = [];

export default class profileData extends Component {
    componentDidMount() {
        fetchApi("/auth/security/roles","GET")
            .then( data => {
                data.forEach(element => {
                    let dropDownEle = {label: element["SceDes"], value: element["SceCod"]};
                    options.push(dropDownEle);
                    this.setState({roles: dropDownEle})
                })
            });
    }

    state={
        roles: [],

    };
    handleOnchange =  (selectedOption) => {
        this.props.callback(selectedOption)
        console.log(this.props.roles)

    };
    handleClick = () => {
        this.setValue(null);
    };


    render() {

        return (

            <div className="p-30">
                <div className="col-lg-12">
                    <div className="row">
                        <div className="col-md-12 mb-3">
                            <Select
                                closeMenuOnSelect={false}
                                name="roles"
                                components={makeAnimated()}
                                defaultValue={this.props.roles}
                                options={options}
                                onChange={this.handleOnchange}
                                isMulti
                            />
                        </div>
                    </div>

                </div>
            </div>

        )
    }
};
