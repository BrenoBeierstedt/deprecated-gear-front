import React from "react";
import {Link} from "react-router-dom";

const CusPrev = props =>

    <tbody>
    <tr>

        <td>{props.SipCus}</td>
        <td>{("("+props.Cf1Aco+")" +props.Cf1Num)}</td>
        <td>{props.SipVhc}</td>
        <td>{props.CvnPlt}</td>



        <td>
            <Link to={"/cusForm"}
               className="td-n c-deep-purple-500 cH-blue-500 fsz-md p-5">
                <i className="ti-pencil">
                </i>
            </Link>


        </td>


    </tr>



    </tbody>;

export default CusPrev;