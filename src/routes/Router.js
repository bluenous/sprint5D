import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "../components/NavBar";
import App from "../pages/App";
import NewProduct from "../pages/NewProducts";

const Router = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={App}></Route>
        <Route exact path="/new" component={NewProduct}></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
