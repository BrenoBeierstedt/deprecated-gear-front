import React, {Component} from "react";
import Modal from "./mod";




export default class RolePrev extends Component {

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

                <td>{this.props.SceCod}</td>
                <td>{ this.props.SceNam}</td>
                <td>{this.props.SceDes}</td>


                <td>

                    <a href="javascript:void(0)" className="ti-pencil " value="Open" onClick={() => this.openModal()}/>




                </td>


            </tr>
            <Modal openModal={this.state.visible} role={this.props} callback={this.closeModal}/>

            </tbody>
        )
    }
}


