import {Link} from "react-router-dom";
import React from "react";



class mainReports extends React.Component {
    render() {
        return(

<li><a className="has-arrow  " href="#" aria-expanded="false"><i
    className="fa fa-level-down"/><span className="hide-menu">Relatórios</span></a>
    <ul aria-expanded="false" className="collapse">
        <Link to="/IntRep">Interno</Link>
        <Link to="/ExtRep">Externo</Link>
    </ul>
</li>



        )
    }
}

export default mainReports;