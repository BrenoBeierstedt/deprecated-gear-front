import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App.js';
import history from './components/history';
import Login from './components/login/login'
import {Route, BrowserRouter, Link, Router, Switch, Redirect} from 'react-router-dom';

import cusList from "./components/customer/customerList";
import cusForm from "./components/customer/customerForm";
import EmpList from "./components/employee/employeeList";
import EmpForm from "./components/employee/employeeForm";
import InvForm from "./components/inventory/inventoryForm";
import PartsForm from "./components/parts/partsForm";
import ExtRep from "./components/reports/externalReports";
import IntRep from "./components/reports/internalReports";
import ServForm from "./components/service/serviceForm";
import ServInProEdit from "./components/service/inProgress/serviceInProgressEdit";
import ServInProForm from "./components/service/inProgress/serviceInProgressForm";
import ServInProList from "./components/service/inProgress/serviceInProgressList";
import ServList from "./components/service/serviceList";
import UserForm from "./components/user/userForm";
import VehiCusForm from "./components/vehicle/vehicleCustomerForm";
import VehiTranfer from "./components/vehicle/vehicleTransfer";
import VehiModelList from "./components/vehicle/vehicleModelList";
import VehiModForm from "./components/vehicle/vehicleModelForm";

import LogLay from './components/pageComponents/layCont'
import Layout from './components/pageComponents/layout'

import InnerRoute from './routes/innerLayout'
import Auth from './auth'

import PrivateRoute from './routes/privateRoute';
import logout from "./components/login/logout";



function Main(){
    return(



<Switch>

<Route exact path='/'  component={Login}/>
                <PrivateRoute exact path="/principal"  layout={Layout} component={App}/>
                <PrivateRoute exact path='/cusList'  component={cusList} />
                <PrivateRoute exact path='/cusForm' component={cusForm} />
                <PrivateRoute exact path='/empList' component={EmpList} />
                <PrivateRoute exact path='/empForm' component={EmpForm}/>
                <PrivateRoute exact path='/invForm' component={InvForm}/>
                <PrivateRoute exact path='/partsForm' component={PartsForm}/>
                <PrivateRoute exact path='/extRep' component={ExtRep}/>
                <PrivateRoute exact path='/intRep' component={IntRep}/>
                <PrivateRoute exact path='/servForm' component={ServForm}/>
                <PrivateRoute exact path='/servInProEdit' component={ServInProEdit}/>
                <PrivateRoute exact path='/servInProForm' component={ServInProForm}/>
                <PrivateRoute exact path='/servInProList' component={ServInProList}/>
                <PrivateRoute exact path='/servList' component={ServList}/>
                <PrivateRoute exact path='/userForm' component={UserForm}/>
                <PrivateRoute exact path='/servInProList' component={ServInProList}/>
                <PrivateRoute exact path='/vehiCusForm' component={VehiCusForm}/>
                <PrivateRoute exact path='/vehiTranfer' component={VehiTranfer}/>
                <PrivateRoute exact path='/vehiModelList' component={VehiModelList}/>
    <PrivateRoute exact path='/logout'  component={logout} />
                <PrivateRoute exact path='/vehiModForm' component={VehiModForm}/>


</Switch>



    )
}

ReactDOM.render(
    (

        <BrowserRouter>

            <Router history={history}>

<Main/>

            </Router>

        </BrowserRouter>

    ),
    document.getElementById('root')
);


