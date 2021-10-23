import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import App from "../pages/App";
import NewProduct from "../pages/NewProducts";
import NewSale from "../pages/NewSale";
import ListSales from "../components/ListSales";

const Router = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={App}></Route>
        <Route exact path="/sales" component={ListSales} />
        <Route exact path="/newproduct" component={NewProduct}></Route>
        <Route exact path="/newsale" component={NewSale}></Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
