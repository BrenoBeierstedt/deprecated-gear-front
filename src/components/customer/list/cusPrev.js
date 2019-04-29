import React, {Component} from "react";
import {Link} from "react-router-dom";
import Modal from "./mod";




export default class CusPrev extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: false,

        }
    }

    openModal() {
        this.setState({
            visible: true
        });
    }

    closeModal = () => {
        this.setState({
            visible: false
        });
    };


    render() {
        return (

            <tbody>
            <tr>

                <td>{this.props.CusNam}</td>
                <td>{("(" + this.props.Cf1Aco + ")" + this.props.Cf1Num)}</td>
                <td>{this.props.CusEma}</td>


                <td>

                    <a href="javascript:void(0)" className="ti-pencil " value="Open" onClick={() => this.openModal()}/>



                    <Link to={"/VehiCusForm"}
                          className="td-n c-red-500 cH-blue-500 fsz-md p-5">
                        <i className="ti-car">
                        </i>
                    </Link>
                </td>


            </tr>
            <Modal openModal={this.state.visible} cus={this.props} callback={this.closeModal}/>

            </tbody>
        )
    }
}


