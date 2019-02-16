import React from "react";
import {Link} from "react-router-dom";

const CusPrev = props =>

    <tbody>
    <tr>

        <td>{props.CusNam}</td>
        <td>{("("+props.Cf1Aco+")" +props.Cf1Num)}</td>
        <td>{props.CusEma}</td>



        <td>
            <Link to={"/cusForm"}
               className="td-n c-deep-purple-500 cH-blue-500 fsz-md p-5">
                <i className="ti-pencil">
                </i>
            </Link>

            <Link to={"/VehiCusForm"}
               className="td-n c-red-500 cH-blue-500 fsz-md p-5">
                <i className="ti-car">
                </i>
            </Link>
        </td>


    </tr>



    </tbody>;

export default CusPrev;