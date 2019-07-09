
// Importando o React
import React from "react";


import Services from "./sidebarComponents/services/sevices";
import Personal from "./sidebarComponents/personal/personal";
import MainInternal from "./sidebarComponents/internal/mainInternal";
import MainIT from "./sidebarComponents/mainIT/mainIT";
import MainReports from "./sidebarComponents/mainReports/mainReports";



const level = 1;

const Sidebar = () => (
    <div className="left-sidebar">

        <div className="scroll-sidebar">

            <nav className="sidebar-nav">
                <ul id="sidebarnav">

                    <li className="nav-devider"/>

                    {level  == 8 || level  == 1 ? <Services /> : null}

                    {level  == 8 || level  == 1 ? <Personal /> : null}

                    {level  == 8 || level  == 1 ? <MainInternal /> : null}

                    {level  == 8 || level  == 1 ? <MainIT /> : null}

                    {level  == 8 || level  == 1 ? <MainReports /> : null}



                </ul>
            </nav>

        </div>

    </div>



);

export default Sidebar;
