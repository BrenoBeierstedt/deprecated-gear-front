import React from "react";
import {Link} from "react-router-dom";

const VhcPrev = props =>

    <tbody>
    <tr>

        <td>{props.name}</td>
        <td>{props.marca}</td>




        <td>
            <Link to={"/cusForm"}
               className="td-n c-deep-purple-500 cH-blue-500 fsz-md p-5">
                <i className="ti-pencil">
                </i>
            </Link>


        </td>


    </tr>



    </tbody>;

export default VhcPrev;