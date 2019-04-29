
import React from "react"
import { Route, Switch } from "react-router-dom"
import Layout from "../components/pageComponents/layout";

const InnerRoute = ({ component: Component, layout: Layout, ...rest }) => (
    <Route {...rest} render={props => (
        <Layout>
            <Component {...props} />
        </Layout>
    )} />
);

export default InnerRoute;