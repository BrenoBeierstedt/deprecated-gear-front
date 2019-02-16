import React from "react";
import {Link} from "react-router-dom";

const ProPrev = props =>

    <tbody>
    <tr>

        <td>{props.ProDes}</td>
        <td>{props.ProDer}</td>
        <td>{props.ProPrc}</td>



        <td>
            <Link to={"/partsForm"}
               className="td-n c-deep-purple-500 cH-blue-500 fsz-md p-5">
                <i className="ti-pencil">
                </i>
            </Link>


        </td>


    </tr>



    </tbody>;

export default ProPrev;