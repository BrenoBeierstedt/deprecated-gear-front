import {Link} from "react-router-dom";
import React from "react";

const level = 1

class mainInternal extends React.Component {
    render() {
        return(

<li><a className="has-arrow  "  href="#" aria-expanded="false"><i
    className="fa fa-envelope"/><span className="hide-menu">Cadastro interno</span></a>
    <ul aria-expanded="false" className="collapse">
        <li><a className="has-arrow" href="#" aria-expanded="false">Inventário</a>
            <ul aria-expanded="false" className="collapse">
                <Link to="/proList">Produtos</Link>

            </ul>
        </li>



    </ul>
</li>


        )
    }
}

export default mainInternal;
