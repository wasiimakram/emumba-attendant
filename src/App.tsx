import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProtectedRoute from "./components/Route/ProtectedRoute";
import routes from "./components/Route/Routes";
import Login from "./modules/auth/Login";
import "./App.css";
import "./scss/style.scss";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/admin-login" component={Login} />
          <Route path="/login" component={Login} />
          {routes.map((route) => {
            return (
              <ProtectedRoute
                key={route.path}
                path={route.path}
                component={route.component}
                type={route.type}
              />
            );
          })}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
