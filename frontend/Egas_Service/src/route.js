import React from 'react'
import {BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import CustomerLogin from "./components/CustomerLogin";
import AdminLogin from "./components/AdminLogin";
import Registration from "./components/Registration"
import AdminPage from "./components/AdminPage";
import Booking from "./components/Booking";
import CustomerPage from "./components/CustomerPage";
import RepaireRequest from "./components/RepaireRequest";
import ListConsumer from "./components/ListConsumer";
import ListBooking from "./components/ListBooking";
import ListRequest from "./components/ListRequest";

const route = () => {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/customerlogin" component={CustomerLogin} />
            <Route exact path="/adminlogin" component={AdminLogin} />
            <Route exact path="/adminpage" component={AdminPage} />
            <Route exact path="/register" component={Registration} />
            <Route exact path="/booking" component={Booking} />
            <Route exact path="/customerpage" component={CustomerPage} />
            <Route exact path="/repairerequest" component={RepaireRequest} />
            <Route exact path="/listconsumer" component={ListConsumer} />
            <Route exact path="/listbooking" component={ListBooking}/>
            <Route exact path="/listrequest" component={ListRequest}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
}

export default route
