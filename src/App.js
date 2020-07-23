import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import "./App.css";
import "./components/Header";
import { routesHome } from "./routes/Route";
import HomeTemplate from "./templates/HomeTemplate";

function App() {
  let renderRoutesHome = (routes) => {
    if (routes && routes.length > 0) {
      return routes.map((item, index) => {
        return (
          <HomeTemplate
            key={index}
            path={item.path}
            exact={item.exact}
            Component={item.component}
          />
        );
      });
    }
  };
  return (
    <BrowserRouter>
      <div>
        <Switch>{renderRoutesHome(routesHome)}</Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
