import React from 'react'
import './App.css';
import './scss/style.scss';
import Login from './modules/auth/Login';
import ChangePassword from './modules/auth/ChangePassword';
import UserDashboard from './modules/dashboard/UserDashboard';
import Dashboard from './modules/admin-dashboard/Dashboard';
import Availability from './modules/availability/Availability';
import Stats from './modules/stats/Stats';
import Setting from './modules/setting/Setting';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import AuthorizeRoute from './components/Route/AuthorizeRoute';
import AdminAuthorizeRoute from './components/Route/AdminAuthorizeRoute';
function App() {
  // exact should remove
  // should Protected Route
  return (
    <div className="App">
          <Router>
              <Switch>
                  <Route exact path="/" component={Login} />
                  <Route exact path="/admin-login" component={Login} />
                  <Route exact path="/login" component={Login} />
                  <AuthorizeRoute exact path="/change-password" component={ChangePassword} />
                  <AuthorizeRoute exact path="/user-dashboard" component={UserDashboard} />
                  
                  <AdminAuthorizeRoute exact path="/admin-dashboard" component={Dashboard}/>
                  <AdminAuthorizeRoute exact path="/availability" component={Availability}/>
                  <AdminAuthorizeRoute exact path="/stats" component={Stats}/>
                  <AdminAuthorizeRoute exact path="/setting" component={Setting}/>
              </Switch>
          </Router>
    </div>
  );
}

export default App;
