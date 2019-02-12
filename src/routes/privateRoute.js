
import React from "react"
import { Route, Switch,Redirect,  } from "react-router-dom"
import Layout from "../components/pageComponents/layout";
import {isAuthenticated} from "../auth";

const PrivateRoute = ({ component: Component, ...rest }) => (
<Layout>
    <Route
        {...rest}
        render={props => (
                isAuthenticated() ?(

                        <Component {...props}/>

                    )
                    :(
                        <Redirect exact to={{ pathname: '/',search:'?msg=É necessário estar logado para acessar a página',state: {from: props.location}}} />
                    )
            )}/>

</Layout>   );

            export default PrivateRoute;