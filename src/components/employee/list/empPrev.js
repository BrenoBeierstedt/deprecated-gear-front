import React from "react";
import {Link} from "react-router-dom";

const EmpPrev = props =>

    <tbody>
    <tr>

        <td>{props.EmpNam}</td>
        <td>{("("+props.Cf1Aco+")" +props.Cf1Num)}</td>
        <td>{props.EmpEma}</td>



        <td>
            <Link to={"/EmpForm"}
               className="td-n c-deep-purple-500 cH-blue-500 fsz-md p-5">
                <i className="ti-pencil">
                </i>
            </Link>

                 </td>


    </tr>



    </tbody>;

export default EmpPrev;