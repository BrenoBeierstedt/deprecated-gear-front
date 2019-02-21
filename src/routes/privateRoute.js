



import React from "react"
import { Route, Switch,Redirect,  } from "react-router-dom"
import Layout from "../components/pageComponents/layout";
import {isAuthenticated} from "../auth";

const PrivateRoute = ({ component: Component, ...rest }) => (
    <div>

    <Route
        {...rest}
        render={props => (
                isAuthenticated() ?(
<div>
    <Layout>
                        <Component {...props}/>
    </Layout>
</div>
                    )
                    :(
                        <Redirect exact to={{ pathname: '/login',search:'?msg=É necessário estar logado para acessar a página',state: {from: props.location}}} />
                    )
            )}/>


    </div>);

            export default PrivateRoute;