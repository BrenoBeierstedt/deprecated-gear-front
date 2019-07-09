import React from "react";
import RolesList from "./roles/roles";
import UserList from "./userList";
import UserForm from "./userForm";

const level = 1;



class mainIT extends React.Component {
    render() {
        return(

            <li><a className="has-arrow  "href="#" aria-expanded="false"><i
                className="fa fa-level-down"/><span className="hide-menu">T.I</span></a>
                <ul aria-expanded="false" className="collapse">
                    {level  == 8 || level  == 1 ? <UserForm /> : null}
                    {level  == 8 || level  == 1 ? <RolesList /> : null}
                    {level  == 8 || level  == 1 ? <UserList /> : null}

                </ul>
            </li>



        )
    }
}

export default mainIT;