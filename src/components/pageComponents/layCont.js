import React from 'react'
import Footer from "./layout";

const LayCont = (props) => (
    <div>
        {props.children}
        <Footer/>
    </div>
);

export default LayCont;