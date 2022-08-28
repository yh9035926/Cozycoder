import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import route from "./route";

const App = () => {
  return (
    <Router>
      <div>
        <NavBar />
        {route.map((route) => {
          return (
            <Route key={route.path} path={route.path} exact>
              <route.component></route.component>
            </Route>
          );
        })}
      </div>
    </Router>
  );
};

export default App;
