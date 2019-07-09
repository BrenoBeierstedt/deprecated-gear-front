import {Link} from "react-router-dom";
import React from "react";

const level = 1;

class personal extends React.Component {
    render() {
        return(

<li><a className="has-arrow " href="javascript:void(0);"  aria-expanded="false">
    <i className="fa fa-male" />
    <span className="hide-menu">Pessoal
                        <span className="label label-rouded label-primary pull-right">2</span>
                        </span>
</a>
    <ul aria-expanded="false" className="collapse">

        <li><a className="has-arrow" href="javascript:void(0);" aria-expanded="false">Clientes</a>
            <ul aria-expanded="false" className="collapse">
                {level == 1 ?  <Link to="/cusList">Clientes</Link> : null}
                {level == 1 ? <li><Link to="/cvnList">Veiculos</Link> </li> : null}


            </ul>
        </li>
        {level == 1 ? <Link to="/empList">Funcionários </Link> : null}

    </ul>
</li>


        )
    }
}

export default personal;
