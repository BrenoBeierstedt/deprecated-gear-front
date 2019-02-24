import Header from './header'
import Footer from './Footer'
import SideBar from './sidebar'


import React from "react"

const Layout = props => (


    <div>
        <Header />
        <SideBar/>
        {props.children}
        <div>

            <Footer/>
        </div>
    </div>

);

export default Layout;