import {Link} from "react-router-dom";
import React from "react";

const level = 8
class sevices extends React.Component {
    render() {
        return(

            <li><a className="has-arrow  " href="#" aria-expanded="false"><i
                className="fa fa-envelope"/><span className="hide-menu">Serviço</span></a>
                <ul aria-expanded="false" className="collapse">
                    {level  == 8 || level  == 1 ? <Link to="/ServInProForm">Novo serviço</Link> : null}
                    {level  == 8 || level  == 1 ? <Link to="/ServInProList">Serviços em andamento</Link> : null}

                    {level  == 8 || level  == 1 ? <Link to="/ServList">Serviços comuns</Link> : null}





                </ul>
            </li>


        )
    }
}

export default sevices;
