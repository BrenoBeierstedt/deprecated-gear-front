import  {Component} from "react";
import history from "../history"

export  default class Logout extends Component{

    componentWillMount() {
        localStorage.removeItem('auth-token');
        localStorage.removeItem('Refresh');
       history.push('/')
    }

    render(){
        return null;
    }
}