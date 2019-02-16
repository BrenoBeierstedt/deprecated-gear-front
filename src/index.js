import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App.js';
import history from './components/history';
import Login from './components/login/login'
import {Route, BrowserRouter, Link, Router, Switch, Redirect} from 'react-router-dom';

import cusList from "./components/customer/list/customerList";
import cusForm from "./components/customer/form/customerForm";
import EmpList from "./components/employee/list/employeeList";
import EmpForm from "./components/employee/form/employeeForm";
import ProductForm from "./components/inventory/products/form/productForm";
import PartsForm from "./components/inventory/parts/form/partsForm";
import ExtRep from "./components/reports/externalReports";
import IntRep from "./components/reports/internalReports";
import ServForm from "./components/service/commonService/form/csvForm";
import ServInProEdit from "./components/service/inProgress/form/serviceInProgressEdit";
import ServInProForm from "./components/service/inProgress/form/serviceInProgressForm";
import ServInProList from "./components/service/inProgress/list/serviceInProgressList";
import ServList from "./components/service/commonService/list/csvList";
import UserForm from "./components/user/userForm";
import cvnForm from "./components/vehicle/customerVehicle/cvnForm";
import VehiTranfer from "./components/vehicle/misc/vehicleTransfer";
import VehiModelList from "./components/vehicle/models/vehicleModelList";
import VehiModForm from "./components/vehicle/models/vehicleModelForm";

import LogLay from './components/pageComponents/layCont'
import Layout from './components/pageComponents/layout'

import InnerRoute from './routes/innerLayout'
import Auth from './auth'

import PrivateRoute from './routes/privateRoute';
import logout from "./components/login/logout";
import PartsList from "./components/inventory/parts/list/partsList";
import ProductList from "./components/inventory/products/list/productList";
import cvnList from "./components/vehicle/customerVehicle/cvnList";



function Main(){
    return(



        <Switch>

            <Route exact path='/'  component={Login}/>
            <PrivateRoute exact path="/principal"  layout={Layout} component={App}/>
            <PrivateRoute exact path='/cusList'  component={cusList} />
            <PrivateRoute exact path='/cusForm' component={cusForm} />
            <PrivateRoute exact path='/empList' component={EmpList} />
            <PrivateRoute exact path='/empForm' component={EmpForm}/>
            <PrivateRoute exact path='/proForm' component={ProductForm}/>
            <PrivateRoute exact path='/proList' component={ProductList}/>
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

            <PrivateRoute exact path='/vehiTranfer' component={VehiTranfer}/>
            <PrivateRoute exact path='/vehiModelList' component={VehiModelList}/>
            <PrivateRoute exact path='/logout'  component={logout} />
            <PrivateRoute exact path='/vehiModForm' component={VehiModForm}/>
            <PrivateRoute exact path='/partsList' component={PartsList}/>
            <PrivateRoute exact path='/partsForm' component={PartsForm}/>
            <PrivateRoute exact path='/cvnForm' component={cvnForm}/>
            <PrivateRoute exact path='/cvnList' component={cvnList}/>


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


