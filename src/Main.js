import 'popper.js/dist/popper.min.js';
import {Route, BrowserRouter,  Router, Switch} from 'react-router-dom';

import React  from "react";

import Login from "./components/login/login";
import PrivateRoute from "./routes/privateRoute";

import App from "./containers/App";
import cusList from "./components/customer/list/customerList";
import cusForm from "./components/customer/form/customerForm";
import EmpList from "./components/employee/list/employeeList";
import EmpForm from "./components/employee/form/employeeForm";
import ProductForm from "./components/inventory/products/form/productForm";
import ProductList from "./components/inventory/products/list/productList";
import PartsForm from "./components/inventory/parts/form/partsForm";
import ExtRep from "./components/reports/externalReports";
import IntRep from "./components/reports/internalReports";
import ServForm from "./components/service/commonService/form/csvForm";
import ServInProEdit from "./components/service/inProgress/form/serviceInProgressEdit";
import ServInProForm from "./components/service/inProgress/form/serviceInProgressForm";
import ServInProList from "./components/service/inProgress/list/serviceInProgressList";
import ServList from "./components/service/commonService/list/csvList";
import UserForm from "./components/user/userForm";
import VehiTranfer from "./components/vehicle/misc/vehicleTransfer";
import VehiModelList from "./components/vehicle/models/vehicleModelList";
import MnfModelList from "./components/vehicle/models/mnf/MnfModelList";

import logout from "./components/login/logout";
import VehiModForm from "./components/vehicle/models/vehicleModelForm";
import PartsList from "./components/inventory/parts/list/partsList";
import cvnForm from "./components/vehicle/customerVehicle/cvnForm";
import cvnList from "./components/vehicle/customerVehicle/cvnList";
import history from "./components/history";
import SipVDForm from "./components/service/inProgress/form/SipVDForm";
import BudgetForm from './components/service/inProgress/budget/budgetForm';
import TimeLine from './components/service/inProgress/timeLine/timeLine';
import List from "./components/customer/test/List";
import 'jquery/dist/jquery.min.js';

import modalTest from "./components/modalTest/modal";



const Main = () => (



        <div>
<BrowserRouter>

<Router history={history}>


<Switch>

    <PrivateRoute exact path='/modalTest'  component={modalTest}/>

    <Route exact path="/login"   component={Login}/>
    <Route exact path='/list'  component={List}/>
    <PrivateRoute exact path='/'  component={App}/>

<PrivateRoute exact path='/mnflist'  component={MnfModelList}/>
<PrivateRoute exact path='/timeline'  component={TimeLine}/>
<PrivateRoute exact path='/budgetForm'  component={BudgetForm}/>
<PrivateRoute exact path='/SipVDForm'  component={SipVDForm}/>
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

</Router>

</BrowserRouter>
</div>
);

export default Main;