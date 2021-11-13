import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./main.css";
import "./tailwind.css";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import {
  Home,
  About,
  CreateBooking,
  DailyBookingStatus,
  RoomBookingStatus,
} from "./Containers";

function App() {
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <div>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Chaesonvintage </title>
      </Helmet>

      <Router>
        <Navbar />
        <div className='min-h-screen m-8'>
          <Switch>
            <Route path='/create-booking'>
              <CreateBooking />
            </Route>
            <Route path='/daily-booking'>
              <DailyBookingStatus />
            </Route>
            <Route path='/room-booking'>
              <RoomBookingStatus />
            </Route>
            <Route path='/about'>
              <About />
            </Route>
            <Route path='/'>
              <Home />
            </Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
