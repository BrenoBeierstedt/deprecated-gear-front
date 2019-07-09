import React, {Component} from "react";
import {Link} from "react-router-dom";


export default class CusPrev extends Component {

    state = {
        query: "",
        actStg: "",
        nxtStg:"",
    };


    componentWillMount(){
        if(this.props.svcSts === 'Cadastro Inicial'){
            this.setState({actStg:'/SipVDForm'})
            this.setState({nxtStg:'/SipVDForm'})
        }
        if(this.props.svcSts === 'Vistoria'){
            this.setState({actStg:"/SipVDForm"})
            this.setState({nxtStg:"/budgetForm"})
        }
        if(this.props.svcSts === 'Orcamento'){
            this.setState({actStg:"/budgetForm"})
            this.setState({nxtStg:"/timeline"})
        }
        if(this.props.svcSts === 'Finalizaçao'){
            this.setState({actStg:"/timeline"})
            this.setState({nxtStg:"/timeline"})
        }

    }

render(){

    return (
    <tbody>
    <tr>
        <td>{this.props._id}</td>

        <td>{this.props.SipCus}</td>
        <td>{this.props.MdlNam}</td>
        <td>{this.props.CvnPlt}</td>
        <td>{this.props.svcSts}</td>


        <td>
            <Link to={`${this.state.actStg}/${this.props._id}`}
               className="td-n c-deep-purple-500 cH-blue-500 fsz-md p-5">
                <i className="ti-pencil">
                </i>
            </Link>
            <Link to={`${this.state.nxtStg}/${this.props._id}`}
                  className="td-n c-deep-purple-500 cH-blue-500 fsz-md p-5">
                <i className="ti-check">
                </i>
            </Link>


        </td>


    </tr>



    </tbody>
    )
}
}

