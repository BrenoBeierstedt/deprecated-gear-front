import React from "react";
import {Link} from "react-router-dom";

const PrtPrev = props =>

    <tbody>
    <tr>

        <td>{props.PrtDes}</td>
        <td>{props.PrtCon}</td>
        <td>{props.PrtPrc}</td>



        <td>
            <Link to={"/partsForm"}
               className="td-n c-deep-purple-500 cH-blue-500 fsz-md p-5">
                <i className="ti-pencil">
                </i>
            </Link>


        </td>


    </tr>



    </tbody>;

export default PrtPrev;