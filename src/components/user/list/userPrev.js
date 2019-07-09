import React, {Component} from "react";
import {Link} from "react-router-dom";




export default class UserPrev extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: false,

        }
    }



    render() {
        return (

            <tbody>
            <tr>

                <td>{this.props.username}</td>
                <td>{ this.props.email}</td>
                <td>
                    <Link to={`/useredit/${this.props.UsrCod}`} className="ti-pencil " />

                </td>
            </tr>

            </tbody>
        )
    }
}


