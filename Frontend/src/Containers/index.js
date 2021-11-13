import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import CreateBooking from "./CreateBooking";
import RoomBookingStatus from "./BookingStatus/RoomBookingStatus";
import DailyBookingStatus from "./BookingStatus/DailyBookingStatus";

import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

import * as actions from "../Redux/Actions";

const Container = () => {
  const dispatch = useDispatch();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (!isReady) {
      dispatch(actions.systemConnect()).then(() => {
        setIsReady(true);
      });
    }

    return () => {};
  }, [isReady]);

  return (
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
      <Footer />{" "}
    </Router>
  );
};

export default Container;
