import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

import NewProduct from "../pages/NewProducts";
import NewSale from "../pages/NewSale";
import ListSales from "../components/ListSales";
import ListUsers from "../components/ListUsers";
import Products from "../pages/Products";

const Router = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/products" component={Products}></Route>
        <Route exact path="/sales" component={ListSales} />
        <Route exact path="/newproduct" component={NewProduct}></Route>
        <Route exact path="/newsale" component={NewSale}></Route>
        <Route exact path="/users" component={ListUsers}></Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
